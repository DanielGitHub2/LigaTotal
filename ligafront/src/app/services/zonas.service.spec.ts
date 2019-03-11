import { TestBed, inject } from '@angular/core/testing';

import { ZonasService } from './zonas.service';

describe('ZonasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZonasService]
    });
  });

  it('should be created', inject([ZonasService], (service: ZonasService) => {
    expect(service).toBeTruthy();
  }));
});
