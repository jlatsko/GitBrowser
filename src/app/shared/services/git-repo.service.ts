import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface GitRepo {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GitRepoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<GitRepo[]> {
    return this.http.get<GitRepo[]>('/data/user-repos.out');
  }
}
