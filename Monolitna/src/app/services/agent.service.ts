import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  public getAgent(id): Observable<any> {
    return this.http.get(`http://localhost:8080/agents/${id}`);
  }
  
  public updateAgent(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/agents/${id}`, body);
  }
}
