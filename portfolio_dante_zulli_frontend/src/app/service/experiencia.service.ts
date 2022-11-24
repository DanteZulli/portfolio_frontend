import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL = "http://localhost:8080/exp";
  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + "lista");
  }
  public detalle(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `detalle/${id}`);
  }
  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + "create", experiencia);
  }
  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
