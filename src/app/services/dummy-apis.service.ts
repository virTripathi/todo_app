import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DummyApisService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type':'text/html; charset=utf-8',
  
  });
  dummyAPIDelayResponse() {
    return this.http.get('https://hub.dummyapis.com/delay?seconds=1', {headers: this.headers, responseType: 'text' });
  }
}
