import { TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  let service: GiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyService);
  });
});
