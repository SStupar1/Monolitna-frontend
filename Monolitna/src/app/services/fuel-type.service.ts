import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllFuelTypes(): Observable<any> {
    return this.http.get(`http://localhost:8080/fuel-types`);
  }

  public createFuelType(body): Observable<any> {
    return this.http.post(`http://localhost:8080/fuel-types`, body);
  }

  public getFuelType(id): Observable<any> {
    return this.http.get(`http://localhost:8080/fuel-types/${id}`);
  }

  public updateFuelType(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/fuel-types/${id}`, body);
  }

  public deleteFuelType(id): Observable<any>{
    return this.http.delete(`http://localhost:8080/fuel-types/${id}`);
  }
}
