import { AuthService } from './../../auth.service';
import { ActivatedRoute } from '@angular/router';
import { PropostaDeTCCService } from './../../proposta-de-tcc.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lista-de-publicacoes',
  templateUrl: './lista-de-publicacoes.component.html',
  styleUrls: ['./lista-de-publicacoes.component.css']
})
export class ListaDePublicacoesComponent implements OnInit {

  lista_publicados = null;
  propostas = null;
  
  aprovacao: any;
  user: any;
  status: boolean = false;

  constructor (

    private PropostaDeTcc$: PropostaDeTCCService,
    private proposta$: PropostaDeTCCService,
    private auth$: AuthService

    ) { 
    
  }

  ngOnInit(): void {

    this.proposta$.lista_publicados()
      .subscribe(lista_publicados => this.propostas = lista_publicados);
    this.user = this.auth$.usuarioDetalhes();


  }

  verificacao(stats: boolean) {

    this.aprovacao.aprovada = stats;
    
    if(this.aprovacao.aprovada === 'true'){
      this.status = true;
    }

  }

}
