import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getPMBoard(): Observable<any> {
    return this.http.get(API_URL + 'pm', { responseType: 'text' });
  }

  getPMOBoard(): Observable<any> {
    return this.http.get(API_URL + 'pmo', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAddEmployee() : Observable<any> {
    return this.http.get(API_URL + 'pmo/addEmployee', { responseType: 'text'});
  }

  getUpdateEmployee(): Observable<any> {
    return this.http.get(API_URL + 'pmo/updateEmployee', { responseType: 'text'});
  }

}