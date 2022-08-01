import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="https://portfolio-fv.herokuapp.com/autenticacion/";
  //url="http://localhost:8080/autenticacion/";
  currentUserSubject: BehaviorSubject<any>;
  private usuarioAut = new BehaviorSubject<boolean>(false);
  usuarioAut$ = this.usuarioAut.asObservable();
  isLogged!: boolean;

  constructor(private http: HttpClient) { 
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
  }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.url + 'signup', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.url + 'signin', loginUsuario);
  }

  get UsuarioAutenticado() 
  {
      return this.currentUserSubject.value;
  }

  logOut(): void {
    window.sessionStorage.clear();
  }
  }

