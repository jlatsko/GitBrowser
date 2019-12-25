import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription, from} from 'rxjs';
import {map} from 'rxjs/operators';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {GitRepo, GitRepoService} from '../shared/services/git-repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly columns$: Observable<number>;
  readonly gitrepos$: Observable<GitRepo[]>;

  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 3 ],
    [ 'sm', 4 ],
    [ 'md', 5 ],
    [ 'lg', 6 ],
    [ 'xl', 7 ]
  ]);

  constructor(private mediaObserver: MediaObserver, private gitRepoService: GitRepoService) {
    this.gitrepos$ = this.gitRepoService.getAll();
    this.columns$ = this.mediaObserver.asObservable()
        .pipe(
          map(media$ => <number>this.breakpointsToColumnsNumber.get(media$[0].mqAlias))
        );
    }

    log(x) { console.log(x); }
  }

