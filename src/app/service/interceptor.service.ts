import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

    constructor(private autenticacionService: AutenticacionService) { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
      
      
      let currentUser= this.autenticacionService.UsuarioAutenticado;
      if(currentUser && currentUser.token)
      {
        console.log("Interceptor está corriendo " + JSON.stringify(currentUser));
        req=req.clone({
        setHeaders:{
           "Authorization": `Bearer ${currentUser.token}`
           }
        })
      }
      
      return next.handle(req);
  }
}