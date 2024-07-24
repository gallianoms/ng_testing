import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _http = inject(HttpClient);
  private _baseUrl = 'https://jsonplaceholder.typicode.com/';

  getPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this._baseUrl + 'posts');
  }
}
