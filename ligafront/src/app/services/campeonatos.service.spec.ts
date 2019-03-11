import { TestBed, inject } from '@angular/core/testing';

import { CampeonatosService } from './campeonatos.service';

describe('CampeonatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampeonatosService]
    });
  });

  it('should be created', inject([CampeonatosService], (service: CampeonatosService) => {
    expect(service).toBeTruthy();
  }));
});
