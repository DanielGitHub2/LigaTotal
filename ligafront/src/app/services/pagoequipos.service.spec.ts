import { TestBed, inject } from '@angular/core/testing';

import { PagoequiposService } from './pagoequipos.service';

describe('PagoequiposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagoequiposService]
    });
  });

  it('should be created', inject([PagoequiposService], (service: PagoequiposService) => {
    expect(service).toBeTruthy();
  }));
});
