import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public createAd(body): Observable<any> {
    return this.http.post(`http://localhost:8080/ads`, body);
  }
 
  public getAllAds(): Observable<any> {
    return this.http.get(`http://localhost:8080/ads`);
  }

  public getAllPublisherAds(id, publisher): Observable<any> {
    return this.http.get(`http://localhost:8080/ads/publisher-ads/${id}/${publisher}`);
  }


  public getAd(id): Observable<any> {
    console.log("usao u servis");
    return this.http.get(`http://localhost:8080/ads/${id}`);
  }

  public updateAd(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/ads/${id}`, body);
  }

  public deleteAd(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/ads/${id}`);
  }

}
