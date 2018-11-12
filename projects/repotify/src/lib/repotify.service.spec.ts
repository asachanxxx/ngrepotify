import { TestBed } from '@angular/core/testing';

import { RepotifyService } from './repotify.service';

describe('RepotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepotifyService = TestBed.get(RepotifyService);
    expect(service).toBeTruthy();
  });
});
