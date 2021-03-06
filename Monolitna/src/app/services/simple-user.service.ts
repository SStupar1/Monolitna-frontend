import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleUserService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getSimpleUser(id): Observable<any> {
    return this.http.get(`http://localhost:8080/simple-users/${id}`);
  }

  public updateSimpleUser(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/simple-users/${id}`, body);
  }

  public getAllSimpleUsers(): Observable<any> {
    return this.http.get(`http://localhost:8080/simple-users`);
  }

  public getAllBlockedSimpleUsers(): Observable<any> {
    return this.http.get(`http://localhost:8080/simple-users/blocked`);
  }

  public blockSimpleUser(body): Observable<any> {
    return this.http.put(`http://localhost:8080/simple-users/block`, body);
  }

  public deleteSimpleUser(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/simple-users/${id}`);
  }

  public activateSimpleUser(body): Observable<any> {
    return this.http.put(`http://localhost:8080/simple-users/activate`, body);
  }
}
