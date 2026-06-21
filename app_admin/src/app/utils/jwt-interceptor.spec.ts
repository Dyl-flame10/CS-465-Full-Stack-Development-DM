import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt-interceptor';

describe('JwtInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(JwtInterceptor).toBeTruthy();
  });
});
