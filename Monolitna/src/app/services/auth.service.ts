import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public login(body): Observable<any> {
    console.log(body);
    return this.http.put('http://localhost:8080/auth/login', body);
  }

  public registerSimpleUser(body): Observable<any> {
    return this.http.post('http://localhost:8080/auth/register-simple-user', body);
  }


  public registerAgent(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register-agent`, body);
  }
  
}
