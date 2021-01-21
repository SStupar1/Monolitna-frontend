import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient) { }

  public getDiscount(id): Observable<any> {
    return this.http.get(`http://localhost:8080/discounts/${id}`);
  }

  public getAllDiscounts(): Observable<any> {
    return this.http.get(`http://localhost:8080/discounts`);
  }
}
