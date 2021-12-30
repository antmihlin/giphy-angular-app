import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { GIHPY_API, GIHPY_API_KEY } from 'src/app/config/api';
import { GiphyQuery } from 'src/app/models/giphyQuery';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }),
    params: {},
  };

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('CrudService -> error', error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public search(q: GiphyQuery): Observable<any[]> {
    const url = GIHPY_API + 'search';

    const params = new HttpParams()
      .set('api_key', GIHPY_API_KEY)
      .set('q', q.q)
      .set('offset', q.offset)
      .set('limit', q.limit);

    return this.http.get<any>(url, { params }).pipe(
      tap((_) => console.log(`fetched items`)),
      catchError(this.handleError<any>(`getItems`))
    );
  }
}
