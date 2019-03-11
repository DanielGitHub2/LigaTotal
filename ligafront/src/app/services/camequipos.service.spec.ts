import { TestBed, inject } from '@angular/core/testing';

import { CamequiposService } from './camequipos.service';

describe('CamequiposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamequiposService]
    });
  });

  it('should be created', inject([CamequiposService], (service: CamequiposService) => {
    expect(service).toBeTruthy();
  }));
});
