import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosURL = 'https://portfolio-mfv.herokuapp.com/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.proyectosURL + 'ver');
    }
  
  public detalle(id: number): Observable<Proyectos> {
      return this.httpClient.get<Proyectos>(this.proyectosURL + `detalle/${id}`);
      }

  public detallePue(nombreProyecto: string): Observable<Proyectos> {
        return this.httpClient.get<Proyectos>(this.proyectosURL + `detalleProy/${nombreProyecto}`);
        }

  public save(proyecto: Proyectos): Observable<Proyectos> {
    return this.httpClient.post<Proyectos>(this.proyectosURL + 'nueva', proyecto);
  }

  public modificar(id: number, proyecto: Proyectos): Observable<any> {
          return this.httpClient.put<any>(this.proyectosURL + `modificar/${id}`, proyecto);
        }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyectosURL + `borrar/${id}`);
    }
}
