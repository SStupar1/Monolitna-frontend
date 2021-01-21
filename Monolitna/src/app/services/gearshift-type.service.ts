import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GearshiftTypeService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllGearshiftTypes(): Observable<any> {
    return this.http.get(`http://localhost:8080/gearshift-types`);
  }

  public createGearshiftType(body): Observable<any> {
    return this.http.post(`http://localhost:8080/gearshift-types`, body);
  }

  public getGearshiftType(id): Observable<any> {
    return this.http.get(`http://localhost:8080/gearshift-types/${id}`);
  }

  public updateGearshiftType(id, body): Observable<any> {
    return this.http.put(`http://localhost:8080/gearshift-types/${id}`, body);
  }

  public deleteGearshiftType(id): Observable<any> {
    return this.http.delete(`http://localhost:8080/gearshift-types/${id}`);
  }

}
