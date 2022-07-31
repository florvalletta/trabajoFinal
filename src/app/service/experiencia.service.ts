import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //experienciaURL = 'https://portfolio-mfv.herokuapp.com/experiencia/';
  experienciaURL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'ver');
    }
  
  public detalle(id: number): Observable<Experiencia> {
      return this.httpClient.get<Experiencia>(this.experienciaURL + `detalle/${id}`);
      }

  public detallePue(puesto: string): Observable<Experiencia> {
        return this.httpClient.get<Experiencia>(this.experienciaURL + `detalleExp/${puesto}`);
        }

  public save(experiencia: Experiencia): Observable<Experiencia> {
    return this.httpClient.post<Experiencia>(this.experienciaURL + 'nueva', experiencia);
  }

  public modificar(id: number, experiencia: Experiencia): Observable<any> {
          return this.httpClient.put<any>(this.experienciaURL + `modificar/${id}`, experiencia);
        }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `borrar/${id}`);
    }
}
