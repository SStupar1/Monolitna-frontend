import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarBrandService {

  constructor(private http: HttpClient) { }

  public getAllCarBrands(): Observable<any> {
    return this.http.get(`http://localhost:8080/car-brands`);
  }

  public createCarBrand(body): Observable<any> {
    return this.http.post(`http://localhost:8080/car-brands`, body);
  }

  public getCarBrand(id): Observable<any> {
    return this.http.get(`http://localhost:8080/car-brands/${id}`);
  }

  public updateCarBrand(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/car-brands/${id}`, body);
  }

  public deleteCarBrand(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/car-brands/${id}`);
  }
}
