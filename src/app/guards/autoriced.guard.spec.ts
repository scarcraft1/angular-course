import { TestBed } from '@angular/core/testing';

import { AutoricedGuard } from './autoriced.guard';

describe('AutoricedGuard', () => {
  let guard: AutoricedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutoricedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
