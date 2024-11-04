import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly urlBase = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}
  httpGet(path: string): Observable<any> {
    const url = path.startsWith('/') ? path : `${path}`;
    const urlComplete = `${this.urlBase}/${url}`;

    return this.http
      .get(urlComplete)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  httpPost(path: string, body: any): Observable<any> {
    const url = path.startsWith('/') ? path : `${path}`;
    const urlComplete = `${this.urlBase}/${url}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post(urlComplete, JSON.stringify(body), { headers })
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  private extractData(response: any): any {
    return response;
  }
  private handleError(error: any): Observable<never> {
    console.error(error);
    return new Observable<never>();
  }
}
