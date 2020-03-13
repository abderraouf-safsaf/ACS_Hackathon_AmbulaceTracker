import { TestBed } from "@angular/core/testing";
import { Server } from "mock-socket";
import { environment } from "src/environments/environment";
import { AmbulanceLocationService } from "./ambulance-location.service";
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

fdescribe("AmbulanceLocationService", () => {
  let ambulanceLocationService: AmbulanceLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocketIoModule.forRoot(config)],
      providers: [AmbulanceLocationService]
    });
    ambulanceLocationService = TestBed.get(AmbulanceLocationService);
  });

  it("service should be created", () => {
    expect(ambulanceLocationService).toBeTruthy();
  });

  fit("should retrieve all ambulances locations", () => {
    ambulanceLocationService.getAll().subscribe(ambulanceLocations => {
      console.log({ ambulanceLocations });
      expect(ambulanceLocations).toBeTruthy("No locations returned");
      expect(ambulanceLocations.length).toBe(3, "Number of locations is not 3");
    });
  });
});
