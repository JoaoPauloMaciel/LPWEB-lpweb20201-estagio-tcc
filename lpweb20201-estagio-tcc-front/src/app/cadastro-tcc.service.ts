import { environment } from './../environments/environment.prod';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroTccService {

  constructor(private http: HttpClient, private auth$: AuthService) { }

  /* Realização de cadastro de Propostas de TCC */
  cadastro_tcc(proposta_de_tcc:any){
    
    return this.http.post(environment.API_URL.concat('cadastro-tcc/'), proposta_de_tcc, this.auth$.httpOptions());

  }

  /* Realização de atualização de Propostas de TCC */
  atualizar_cadastro_tcc(atualizar_proposta,id){

    return this.http.put(environment.API_URL.concat(`propostas-de-tcc/${id}/`),atualizar_proposta, this.auth$.httpOptions());

  }
  

}

