import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public createComment(body): Observable<any> {
    return this.http.post(`http://localhost:8080/comments`, body);
  }

  public getAllCommentsByStatus(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('status', data["status"])
    } 
    return this.http.get(`http://localhost:8080/comments/status`, queryParams);
  }

  
  public approveComment(body): Observable<any> {
    return this.http.put(`http://localhost:8080/comments/approve`, body);
  }

  public getAllCommentsByAd(id) : Observable<any>{
    return this.http.get(`http://localhost:8080/comments/ad/${id}`);
  }
  
  public denyComment(body): Observable<any> {
    return this.http.put(`http://localhost:8080/comments/deny`, body);
  }
}
