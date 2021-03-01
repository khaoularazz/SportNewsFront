import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private SPORTNEWSURL = "http://localhost:8080/sportnews";
  private AllSPORTNEWSURL = "http://localhost:8080/Allsportnews";
  constructor(private httpClient: HttpClient) { }

  getsportnews(): Observable<Object> {
    return this.httpClient.get(`${this.SPORTNEWSURL}`);
  }

  getAllsportnews(): Observable<Object> {
    return this.httpClient.get(`${this.AllSPORTNEWSURL}`);
  }
}
