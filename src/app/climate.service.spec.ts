import { TestBed, inject } from '@angular/core/testing';

import { ClimateService } from './climate.service';

describe('ClimateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClimateService]
    });
  });

  it('should be created', inject([ClimateService], (service: ClimateService) => {
    expect(service).toBeTruthy();
  }));
});
