import { TestBed } from '@angular/core/testing';

import { Githubservice } from './github-request.service';

describe('GithubRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Githubservice  = TestBed.get(Githubservice );
    expect(service).toBeTruthy();
  });
});
