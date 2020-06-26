import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropostaDeTCCService } from './../../proposta-de-tcc.service';
import { OrientacaoService } from 'src/app/orientacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-tcc',
  templateUrl: './cadastro-tcc.component.html',
  styleUrls: ['./cadastro-tcc.component.css']
})

export class CadastroTccComponent implements OnInit {

  cadastroForm: FormGroup;

  proposta_tcc: any;
  listaOrientacoes: any;
  listaFuncionario: any;
  listaExternos: any;

  constructor(

    private proposta_tcc$: PropostaDeTCCService,
    private orientacao$: OrientacaoService,
    private funcionario$: OrientacaoService,
    private colaboradorExterno$: OrientacaoService,
    private formB: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    
    this.orientacao();
    this.formulario();
    
    this.funcionario$.lista_de_funcionarios().subscribe((data: any) => {
      console.log('Funcionarios', data.results);
    })

    this.colaboradorExterno$.lista_de_externos().subscribe((data: any) => {
      console.log('Colaboradores externos', data.results);
      this.listaExternos = data.reults;
    })

  }

  /** Lista equipe de Orientação */
  orientacao() {

    this.orientacao$.get().subscribe((dados: any) => {
      this.listaOrientacoes = dados.results.filter(
        (tipo) => tipo.tipo === 'tcc'
      );
      console.log(this.listaOrientacoes);
    });

  }

  /**Gerando formulario para salvar dados de cadastro */
  formulario() {

    this.cadastroForm = this.formB.group({
      orientacao_id: [null, [Validators.required]],
      titulo: ['', [Validators.required]],
      conceitos: ['', [Validators.required]],
      resultados_esperados: ['', [Validators.required]],
      objetivo: ['', [Validators.required]],
      tecnologias: ['', [Validators.required]],
      metodologia: ['', [Validators.required]],
      membros_da_banca_funcionario: [[], [Validators.required]],
      membros_da_banca_externo: [[], [Validators.required]]
    });

  }

  /** Atualizar os dados do Objeto */
  atualizarDados() {

    const banca = [];

    this.proposta_tcc = Object.assign({}, this.proposta_tcc, this.cadastroForm.value);
    this.proposta_tcc.orientacao_id = parseInt(this.proposta_tcc.orientacao_id);
    this.cadastroForm.controls.membros_da_banca_funcionario.value.map (funcionario => {banca.push({membro_interno_id : funcionario});});
    this.cadastroForm.controls.membros_da_banca_externo.value.map(colaboradorExterno => {banca.push({membro_externo_id : colaboradorExterno});});
    this.proposta_tcc.membros_da_banca = banca;

    delete this.proposta_tcc.membros_da_banca_funcionario;
    delete this.proposta_tcc.membros_da_banca_externo;

  }

  /** Adicionar */
  adicionar() {
    this.atualizarDados();
    this.proposta_tcc$.cadastrar(this.proposta_tcc).subscribe(
      (retorno: any) => {
        this.router.navigate(['/inicio/propostas-de-tcc/cadastro-tcc']);
      },
      (error) => console.log(error)
    );
  }



  onSubmit() {

    if (!this.cadastroForm.dirty || !this.cadastroForm.valid) {
      this.cadastroForm.markAllAsTouched();
      return '';
    }
    this.adicionar();

  }

}