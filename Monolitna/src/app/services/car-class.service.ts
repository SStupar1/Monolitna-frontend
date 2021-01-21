import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarClassService {

  constructor(private http: HttpClient) { }

  public getAllCarClasses(): Observable<any> {
    return this.http.get(`http://localhost:8080/car-classes`);
  }

  public createCarClass(body): Observable<any> {
    return this.http.post(`http://localhost:8080/car-classes`, body);
  }

  public getCarClass(id): Observable<any> {
    return this.http.get(`http://localhost:8080/car-classes/${id}`);
  }

  public updateCarClass(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/car-classes/${id}`, body);
  }

  public deleteCarClass(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/car-classes/${id}`);
  }
}
