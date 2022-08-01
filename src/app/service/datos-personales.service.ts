import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../models/datos-personales';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonalesService {

   
  datosPersonalesURL = 'https://portfolio-fv.herokuapp.com/datosPersonales/'
  //datosPersonalesURL = 'http://localhost:8080/datosPersonales/'

  constructor(private httpClient: HttpClient) { 
    
  }

  public list(): Observable<DatosPersonales[]> {
    return this.httpClient.get<DatosPersonales[]>(this.datosPersonalesURL + 'ver');
    }
  
  public detalle(id: number): Observable<DatosPersonales> {
      return this.httpClient.get<DatosPersonales>(this.datosPersonalesURL + `detalle/${id}`);
      }

  public detalleDatos(apellido: string): Observable<DatosPersonales> {
        return this.httpClient.get<DatosPersonales>(this.datosPersonalesURL + `detalleDatos/${apellido}`);
        }

  public save(datos: DatosPersonales): Observable<DatosPersonales> {
    return this.httpClient.post<DatosPersonales>(this.datosPersonalesURL + 'nueva', datos);
  }

  public modificar(id: number, datos: DatosPersonales): Observable<any> {
          return this.httpClient.put<any>(this.datosPersonalesURL + `modificar/${id}`, datos);
        }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.datosPersonalesURL + `borrar/${id}`);
    }
}
