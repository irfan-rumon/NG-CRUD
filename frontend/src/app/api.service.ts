import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Framework } from './framework';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/frameworks';

  constructor(private http: HttpClient) {}

  getFrameworks(): Observable<Framework[]> {
    return this.http.get<Framework[]>(this.apiUrl);
  }

  getFramework(frameworkId: any): Observable<Framework> {
    const url = `${this.apiUrl}/${frameworkId}`;
    return this.http.get<Framework>(url);
  }


  addFramework(Framework: Framework): Observable<Framework> {
    return this.http.post<Framework>(this.apiUrl, Framework, httpOptions);
  }

  editFramework(framework: Framework): Observable<Framework> {
    const url = `${this.apiUrl}/${framework.id}`;
    return this.http.put<Framework>(url, framework, httpOptions);
  }

  deleteFramework(framework: Framework): Observable<Framework> {
    const url = `${this.apiUrl}/${framework.id}`;
    return this.http.delete<Framework>(url);
  }
}