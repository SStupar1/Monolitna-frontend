import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  public rateAd(body): Observable<any> {
    return this.http.post(`http://localhost:8080/ratings`, body);
  }

  public getAllRatingsByAd(id): Observable<any> {
    return this.http.get(`http://localhost:8080/ratings/${id}/ad`);
  }

  public getAverageRatingByAd(id): Observable<any> {
    return this.http.get(`http://localhost:8080/ratings/average/${id}/ad`);
  }
}
