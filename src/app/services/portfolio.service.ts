import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:27017/api/portfolio';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  hasPortfolio(id: any): Observable<Boolean> {
    return this.http.get<Boolean>(`${AUTH_API}/userId/${id}`, httpOptions);
  }

  post(portfolio: any): Observable<any>{
    return this.http.post(`${AUTH_API}`, portfolio, httpOptions);
  }

  get(id: any): Observable<any> {
    return this.http.get<any>(`${AUTH_API}/${id}`, httpOptions);
  }

  delete(id: any, asset: any): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`, asset);
  }

  update(id: any, portfolio: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, portfolio);
  }

  // create(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl, data);
  // }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${id}`, data);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(this.baseUrl);
  // }

  // findByTitle(title: any): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}?title=${title}`);
  // }
}
