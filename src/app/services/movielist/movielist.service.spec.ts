import { TestBed, inject } from '@angular/core/testing';

import { MovielistService } from './movielist.service';

describe('MovielistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovielistService]
    });
  });

  it('should be created', inject([MovielistService], (service: MovielistService) => {
    expect(service).toBeTruthy();
  }));
});
