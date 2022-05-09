import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.educacionURL + 'ver');
    }
  
  public detalle(id: number): Observable<Educacion> {
      return this.httpClient.get<Educacion>(this.educacionURL + `detalle/${id}`);
      }

  public detalleTit(titulo: string): Observable<Educacion> {
        return this.httpClient.get<Educacion>(this.educacionURL + `detalleEdu/${titulo}`);
        }

  public save(educacion: Educacion): Observable<Educacion> {
    return this.httpClient.post<Educacion>(this.educacionURL + 'nueva', educacion);
  }

  public modificar(id: number, educacion: Educacion): Observable<any> {
          return this.httpClient.put<any>(this.educacionURL + `modificar/${id}`, educacion);
        }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educacionURL + `borrar/${id}`);
    }
}
