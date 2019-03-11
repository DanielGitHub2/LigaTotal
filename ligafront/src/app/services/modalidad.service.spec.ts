import { TestBed, inject } from '@angular/core/testing';

import { ModalidadesService } from './modalidad.service';

describe('ModalidadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalidadesService]
    });
  });

  it('should be created', inject([ModalidadesService], (service: ModalidadesService) => {
    expect(service).toBeTruthy();
  }));
});
