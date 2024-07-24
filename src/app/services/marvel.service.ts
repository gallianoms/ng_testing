import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private TS = '1';
  private PUBLIC_KEY = '407b10ff96fc33fe82381b597bdaa6f6';
  private HASH = '59d2b302d41ec3bc49db63dcdc146927';
  private apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${[
    this.TS,
  ]}&apikey=${[this.PUBLIC_KEY]}&hash=${[this.HASH]}`;

  constructor(private http: HttpClient) {}

  getCharacters(limit: number, offset: number): Observable<any> {
    const params = {
      limit: limit.toString(),
      offset: offset.toString(),
    };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
