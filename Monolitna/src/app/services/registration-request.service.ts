import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestService {

  constructor(private http: HttpClient) { }

  public confirmRegistrationRequest(body): Observable<any> {
    return this.http.put('http://localhost:8080/simple-users/confirm', body);
  }

  public getAllPendingUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/simple-users/registration-requests');
  }

  public approveRegistrationRequest(body): Observable<any> {
    return this.http.put('http://localhost:8080/simple-users/approve', body);
  }

  public denyRegistrationRequest(body): Observable<any> {
    return this.http.put('http://localhost:8080/simple-users/deny', body);
  }
}
