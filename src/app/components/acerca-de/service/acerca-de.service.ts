import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcercaDe } from 'src/app/models/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  acercaDeURL = 'https://portfolio-fv.herokuapp.com/acercaDe/';
  //acercaDeURL = 'http://localhost:8080/acercaDe/';

  constructor(private httpClient: HttpClient) { }

    public list(): Observable<AcercaDe[]> {
    return this.httpClient.get<AcercaDe[]>(this.acercaDeURL + 'mostrar');
    }

    public detalle(id: number): Observable<AcercaDe> {
      return this.httpClient.get<AcercaDe>(this.acercaDeURL + `detalle/${id}`);
      }

    public detalleDesc(descripcion: string): Observable<AcercaDe> {
      return this.httpClient.get<AcercaDe>(this.acercaDeURL + `detalleDesc/${descripcion}`);
      }
  

    public save(acercaDe: AcercaDe): Observable<any> {
      return this.httpClient.post<any>(this.acercaDeURL + 'nueva', acercaDe);
    }
    
    public modificar(id: number, acercaDe: AcercaDe): Observable<any> {
      return this.httpClient.put<any>(this.acercaDeURL + `modificar/${id}`, acercaDe);
    }

    public eliminar(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.acercaDeURL + `borrar/${id}`);
    }

  }

