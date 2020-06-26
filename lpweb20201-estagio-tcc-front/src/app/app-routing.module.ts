import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { PropostasDeTCCComponent } from './propostas-de-tcc/propostas-de-tcc.component';
import { PropostaDeTCCComponent } from './proposta-de-tcc/proposta-de-tcc.component';
import { ListaDePublicacoesComponent } from './propostas-de-tcc/lista-de-publicacoes/lista-de-publicacoes.component';
import { CadastroTccComponent } from './propostas-de-tcc/cadastro-tcc/cadastro-tcc.component';
import { AlterarPropostaTccComponent } from './propostas-de-tcc/alterar-proposta-tcc/alterar-proposta-tcc.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre', component: SobreComponent },
  {
    path: 'inicio', component: InicioComponent, children: [
      { path: 'propostas-de-tcc', component: PropostasDeTCCComponent },
      { path: 'propostas-de-tcc/:id', component: PropostaDeTCCComponent },
      { path: 'propostas-de-tcc/lista-de-publicacoes', component: ListaDePublicacoesComponent },
      { path: 'propostas-de-tcc/cadastro-tcc', component: CadastroTccComponent },
      { path: 'propostas-de-tcc/alterar-proposta-tcc', component: AlterarPropostaTccComponent },
      { path: '', component: HomeInicioComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
