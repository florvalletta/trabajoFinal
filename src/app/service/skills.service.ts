import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillURL = 'https://portfolio-fv.herokuapp.com/skill/';
  //skillURL = 'http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillURL + 'ver');
    }
  
  public detalle(id: number): Observable<Skill> {
      return this.httpClient.get<Skill>(this.skillURL + `detalle/${id}`);
      }

  public detallePue(nombreSkill: string): Observable<Skill> {
        return this.httpClient.get<Skill>(this.skillURL + `detalleProy/${nombreSkill}`);
        }

  public save(skill: Skill): Observable<Skill> {
    return this.httpClient.post<Skill>(this.skillURL + 'nueva', skill);
  }

  public modificar(id: number, skill: Skill): Observable<any> {
          return this.httpClient.put<any>(this.skillURL + `modificar/${id}`, skill);
        }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + `borrar/${id}`);
    }
}
