import { environment } from './../environments/environment.prod';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDePublicacoesService {

  constructor(private http: HttpClient, private auth$: AuthService) { }

  lista_publicados() {
    return this.http.get(environment.API_URL.concat('lista-de-publicacoes/'), this.auth$.httpOptions());
  }
  
}
