import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllCarModels(): Observable<any> {
    return this.http.get(`http://localhost:8080/car-models`);
  }

  public createCarModel(body): Observable<any> {
    return this.http.post(`http://localhost:8080/car-models`, body);
  }

  public getCarModel(id): Observable<any> {
    return this.http.get(`http://localhost:8080/car-models/${id}`);
  }

  public updateCarModel(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/car-models/${id}`, body);
  }

  public deleteCarModel(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/car-models/${id}`);
  }
}
