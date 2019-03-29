import { TestBed } from '@angular/core/testing';

import { DiretivasNgifService } from './diretivas-ngif.service';

describe('DiretivasNgifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiretivasNgifService = TestBed.get(DiretivasNgifService);
    expect(service).toBeTruthy();
  });
});
