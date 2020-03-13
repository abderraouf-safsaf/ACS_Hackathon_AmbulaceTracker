import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AmbulanceLocationsViewerComponent } from "./ambulance-locations-viewer.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { environment } from "src/environments/environment";
import { AmbulanceLocationService } from "../core/services/ambulance-location.service";
import { of } from "rxjs";
import { WebSocket, Server } from "mock-socket";

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

const MOCK_AMBULANCES_LOCATIONS = {
  1: { lat: 32.7766642, lng: -96.7969879 },
  2: { lat: 32.7766642, lng: -96.0969879 }
};
describe("AmbulanceLocationsViewerComponent", () => {
  let component: AmbulanceLocationsViewerComponent;
  let fixture: ComponentFixture<AmbulanceLocationsViewerComponent>;
  let el: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocketIoModule.forRoot(config)],
      declarations: [AmbulanceLocationsViewerComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AmbulanceLocationsViewerComponent);
    el = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should display the Open Street Map", () => {
    const tabs = el.queryAll(By.css("#map"));
    expect(tabs.length).toBe(1, "Map not found");
  });

  fit("should display ambulances markers in tha map", () => {
    const fakeURL = "ws://localhost:8080";
    const mockServer = new Server(fakeURL);

    mockServer.on("connection", socket => {
      socket.on("message", data => {
        socket.send("test message from mock server");
      });
    });
    /*ambulanceLocationService.getAll.and.returnValue(
      of(MOCK_AMBULANCES_LOCATIONS)
    );
    fixture.detectChanges();
    const markers = el.queryAll(By.css(".leaflet-marker-icon"));
    expect(markers.length).toBe(
      Object.keys(MOCK_AMBULANCES_LOCATIONS).length,
      "Unexpected number of markers found"
    );*/
  });
});
