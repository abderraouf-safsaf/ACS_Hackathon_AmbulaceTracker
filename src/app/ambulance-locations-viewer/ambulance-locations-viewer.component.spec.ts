import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AmbulanceLocationsViewerComponent } from "./ambulance-locations-viewer.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

import { environment } from "src/environments/environment";

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

fdescribe("AmbulanceLocationsViewerComponent", () => {
  let component: AmbulanceLocationsViewerComponent;
  let fixture: ComponentFixture<AmbulanceLocationsViewerComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SocketIoModule.forRoot(config)],
      declarations: [AmbulanceLocationsViewerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
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

  it("should display ambulances markers in tha map", () => {});
});
