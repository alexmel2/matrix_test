import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class Repository {
  constructor(
    public id: number,
    public name: string,
    public avatar_url: string,
    public isBookmark:boolean
    ) {
  }
}
export interface repositorySearch {
  repositoryName: string;
}
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RepositoryService {
   URL="https://api.github.com/search/repositories"
  searchEvent: EventEmitter<Repository> = new EventEmitter();
  
  search(params: repositorySearch) {
  return this.httpClient.get(this.URL,
    {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
    params: new HttpParams().set('q', params.repositoryName)
  })
  
}
constructor(private httpClient: HttpClient){}

}
