import { TestBed, inject } from '@angular/core/testing';

import { PartidosService } from './partidos.service';

describe('PartidosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidosService]
    });
  });

  it('should be created', inject([PartidosService], (service: PartidosService) => {
    expect(service).toBeTruthy();
  }));
});
