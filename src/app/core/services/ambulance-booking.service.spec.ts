import { TestBed } from '@angular/core/testing';

import { AmbulanceBookingService } from './ambulance-booking.service';

describe('AmbulanceBookingService', () => {
  let service: AmbulanceBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulanceBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
