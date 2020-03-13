import { TestBed } from "@angular/core/testing";

import { AmbulanceAssignmentService } from "./ambulance-booking.service";

describe("AmbulanceBookingService", () => {
  let service: AmbulanceAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulanceAssignmentService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
