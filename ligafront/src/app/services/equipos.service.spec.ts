import { TestBed, inject } from '@angular/core/testing';

import { EquiposService } from './equipos.service';

describe('EquiposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquiposService]
    });
  });

  it('should be created', inject([EquiposService], (service: EquiposService) => {
    expect(service).toBeTruthy();
  }));
});
