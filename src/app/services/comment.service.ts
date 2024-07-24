import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private _http = inject(HttpClient);
  private _baseUrl = 'https://jsonplaceholder.typicode.com/';

  getComments(start: number, limit: number): Observable<IComment[]> {
    const params = new HttpParams()
      .set('_start', start.toString())
      .set('_limit', limit.toString());
    return this._http.get<IComment[]>(this._baseUrl + 'comments', { params });
  }
}

// https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5
