import { TestBed } from '@angular/core/testing';

import { VehicleDetailGuard } from './vehicle-detail.guard';

describe('VehicleDetailGuard', () => {
  let guard: VehicleDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VehicleDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
