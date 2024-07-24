import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

type Post = {
  userId: number;
  id: number;
  title: string;
  boyd: string;
};

@Injectable({
  providedIn: 'root',
})
export class TwainService {
  constructor(private http: HttpClient) {}

  public getQuote(id: string = '1'): Observable<string> {
    return this.http
      .get<Post>('https://jsonplaceholder.typicode.com/posts/' + id)
      .pipe(map((post) => post.title));
  }
}
