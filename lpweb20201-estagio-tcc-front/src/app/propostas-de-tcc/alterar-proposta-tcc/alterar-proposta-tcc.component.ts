import { AuthService } from './../../auth.service';
import { PropostaDeTCCService } from 'src/app/proposta-de-tcc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterar-proposta-tcc',
  templateUrl: './alterar-proposta-tcc.component.html',
  styleUrls: ['./alterar-proposta-tcc.component.css']
})
export class AlterarPropostaTccComponent implements OnInit {

  propostas = null;

  usuario: any;
  exibir: boolean = false;
  

  constructor(
    
    private proposta$: PropostaDeTCCService,
    private auth$: AuthService
    
    ) { }

  ngOnInit(): void {

    this.proposta$.lista().subscribe(lista => this.propostas = lista);
    this.usuario = this.auth$.usuarioDetalhes();
    this.verificar();

  }

  verificar() {

    this.usuario.groups.find((grupo) => {

      if (grupo.name === 'Aluno') { this.exibir = true; }

    });

  }

}
