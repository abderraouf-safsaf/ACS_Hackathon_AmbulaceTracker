import { TestBed } from "@angular/core/testing";
import { Server } from "mock-socket";
import { environment } from "src/environments/environment";
import { AmbulanceLocationService } from "./ambulance-location.service";
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import io from "socket.io-client";

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

fdescribe("AmbulanceLocationService", () => {
  let ambulanceLocationService: AmbulanceLocationService;
  let socket;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocketIoModule.forRoot(config)],
      providers: [AmbulanceLocationService]
    });
    ambulanceLocationService = TestBed.get(AmbulanceLocationService);
    /*socket = io.connect("http://localhost:9000");
    socket.on("connect", () => {
      console.log("CONNECTED");
    });
    socket.on("disconnect", function() {
      console.log("DISCONNECTED");
    });*/
  });

  it("service should be created", () => {
    expect(ambulanceLocationService).toBeTruthy();
  });

  fit("should retrieve all ambulances locations", () => {
    ambulanceLocationService.getAll().subscribe(ambulanceLocations => {
      expect(ambulanceLocations).toBeTruthy("No locations returned");
    });
  });
});
