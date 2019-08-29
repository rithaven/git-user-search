import { TestBed } from '@angular/core/testing';

import { GithubRequestService } from './github-request.service';

describe('GithubRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubRequestService = TestBed.get(GithubRequestService);
    expect(service).toBeTruthy();
  });
});
