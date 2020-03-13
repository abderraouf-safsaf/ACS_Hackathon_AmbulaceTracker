import { TestBed } from "@angular/core/testing";
import { Server } from "mock-socket";

import { AmbulanceLocationService } from "./ambulance-location.service";

describe("AmbulanceLocationService", () => {
  let ambulanceLocationService: AmbulanceLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmbulanceLocationService]
    });
    ambulanceLocationService = TestBed.get(AmbulanceLocationService);
    const fakeURL = "ws://localhost:8080";
    const mockServer = new Server(fakeURL);

    mockServer.on("connection", socket => {
      socket.on("message", data => {
        //t.is(data, 'test message from app', 'we have intercepted the message and can assert on it');
        socket.send("test message from mock server");
      });
    });
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
  });

  it("service should be created", () => {
    expect(ambulanceLocationService).toBeTruthy();
  });

  it("should retrieve all ambulances locaitons", () => {
    ambulanceLocationService.getAll().subscribe(ambulanceLocations => {
      console.log({ ambulanceLocations });
      expect(ambulanceLocations).toBeTruthy("No locations returned");
      expect(ambulanceLocations.length).toBe(3, "Number of locations is not 3");
    });
  });
});
