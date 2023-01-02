import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  URL = environment.URL + 'proyectos/';
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

  public detalle(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

  public guardar(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
