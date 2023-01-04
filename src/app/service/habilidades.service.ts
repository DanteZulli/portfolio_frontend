import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  URL = 'https://portfolio-backend-km58.onrender.com' + '/habilidades/';
  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Habilidades[]> {
    return this.httpClient.get<Habilidades[]>(this.URL + "lista");
  }
  public detail(id: number): Observable<Habilidades> {
    return this.httpClient.get<Habilidades>(this.URL + `detail/${id}`);
  }
  public save(Habilidades: Habilidades): Observable<any> {
    return this.httpClient.post<any>(this.URL + "create", Habilidades);
  }
  public update(id: number, Habilidades: Habilidades): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, Habilidades);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
