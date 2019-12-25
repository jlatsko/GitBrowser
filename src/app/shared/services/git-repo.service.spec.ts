import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GitRepoService } from './git-repo.service';

describe('GitRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      GitRepoService
    ]
  }));

  it('should be created', () => {
    const service: GitRepoService = TestBed.get(GitRepoService);
    expect(service).toBeTruthy();
  });
});
