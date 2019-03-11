import { TestBed, inject } from '@angular/core/testing';

import { DivisionalesService } from './divisionales.service';

describe('DivisionalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DivisionalesService]
    });
  });

  it('should be created', inject([DivisionalesService], (service: DivisionalesService) => {
    expect(service).toBeTruthy();
  }));
});
