import { TestBed, inject } from '@angular/core/testing';

import { JuparsService } from './jupars.service';

describe('JuparsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuparsService]
    });
  });

  it('should be created', inject([JuparsService], (service: JuparsService) => {
    expect(service).toBeTruthy();
  }));
});
