import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http: HttpClient) { }

  
  public createReservation(body): Observable<any> {
    return this.http.post(`http://localhost:8080/reservations`, body);
  }

  public createBundle(body): Observable<any> {
    return this.http.post(`http://localhost:8080/reservations/bundles`, body);
  }

  public getAllPublisherReservations(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('publisherId', data["publisherId"])
                               .set("simpleUser", data["simpleUser"])
    } 
    return this.http.get(`http://localhost:8080/reservations/publisher`, queryParams);
  }

  public getAllCustomerReservations(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('customerId', data["customerId"])
                               .set("simpleUser", data["simpleUser"])
    } 
    return this.http.get(`http://localhost:8080/reservations/customer`, queryParams);
  }

  public approveReservation(body): Observable<any> {
    return this.http.put(`http://localhost:8080/reservations/approve`, body);
  }

  public denyReservation(body): Observable<any> {
    return this.http.put(`http://localhost:8080/reservations/deny`, body);
  }

  public approveBundle(body): Observable<any> {
    return this.http.put(`http://localhost:8080/bundles/approve`, body);
  }

  public denyBundle(body): Observable<any> {
    return this.http.put(`http://localhost:8080/bundles/deny`, body);
  }

  public getAllPublisherBundles(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('publisherId', data["publisherId"])
                               .set("simpleUser", data["simpleUser"])
    } 
    return this.http.get(`http://localhost:8080/bundles/publisher`, queryParams);
  }

}
