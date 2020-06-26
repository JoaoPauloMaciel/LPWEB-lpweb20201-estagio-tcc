import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RetornarViewModel } from './retornar';

@Injectable({
  providedIn: 'root'
})
export class OrientacaoService {

  constructor(

    private http: HttpClient, private auth$: AuthService
    
  ) { }

  get() : Observable<any> {

    return this.http.get<RetornarViewModel<any>>(environment.API_URL.concat('orientacoes/'),this.auth$.httpOptions());
  
  }

  lista_de_funcionarios() {

    return this.http.get(environment.API_URL.concat('funcionarios/'), this.auth$.httpOptions());
  
  }

  lista_de_externos() {

    return this.http.get(environment.API_URL.concat('colaboradores-externos/'), this.auth$.httpOptions());
 
  }


}
