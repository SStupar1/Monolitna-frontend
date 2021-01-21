import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public uploadImage(uploadImageData): Observable<any> {
    return this.http.post(`http://localhost:8080/ads/upload`, uploadImageData, { observe: 'response' });
  }

  public getImage(id): Observable<any> {
    return this.http.get(`http://localhost:8080/ads/get/${id}`);
  }
}
