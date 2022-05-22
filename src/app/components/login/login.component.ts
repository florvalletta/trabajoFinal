import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private autenticacionService: AutenticacionService,
    private router: Router) { 
    this.form =this.formBuilder.group({
        username:['',[Validators.required]],
        password:['',[Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  get Username() 
  {
    return this.form.get('username');
  }

  get Password() 
  {
    return this.form.get('password'); 
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data =>{
      console.log("DATA:" + JSON.stringify(data));
      this.router.navigate(['/porfolio']);
    })
  }

}
