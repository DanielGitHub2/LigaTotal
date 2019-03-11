import { TestBed, inject } from '@angular/core/testing';

import { ViewEquiposService } from './viewequipos.service';

describe('ViewequiposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewEquiposService]
    });
  });

  it('should be created', inject([ViewEquiposService], (service: ViewEquiposService) => {
    expect(service).toBeTruthy();
  }));
});
