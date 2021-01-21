import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getPricelist(id): Observable<any> {
    return this.http.get(`http://localhost:8080/pricelists/${id}`);
  }

  public getAllPricelists(): Observable<any> {
    return this.http.get(`http://localhost:8080/pricelists`);
  }

  public createPricelist(body): Observable<any> {
    return this.http.post(`http://localhost:8080/pricelists`, body);
  }
}
