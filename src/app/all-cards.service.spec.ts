import { TestBed, inject } from '@angular/core/testing';

import { AllCardsService } from './all-cards.service';

describe('AllCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllCardsService]
    });
  });

  it('should be created', inject([AllCardsService], (service: AllCardsService) => {
    expect(service).toBeTruthy();
  }));
});
