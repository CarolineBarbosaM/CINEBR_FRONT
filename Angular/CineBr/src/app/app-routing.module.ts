import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { IndexComponent } from './user/index/index.component';
import { Error404Component } from './user/error404/error404.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './user/recuperar-senha/recuperar-senha.component';
import { HomeComponent } from './user/home/home.component';
import { FilmesComponent } from './user/filmes/filmes.component';
import { SeriesComponent } from './user/series/series.component';
import { DocumentariosComponent } from './user/documentarios/documentarios.component';
import { NovidadesComponent } from './user/novidades/novidades.component';
import { ConfiguracoesComponent } from './user/configuracoes/configuracoes.component';
import { MinhaListaComponent } from './user/minha-lista/minha-lista.component';
import { EditarUsuarioComponent } from './user/editar-usuario/editar-usuario.component';
import { TermosComponent } from './user/termos/termos.component';
import { ContatoComponent } from './user/contato/contato.component';
import { InfoNovidadeComponent } from './user/info-novidade/info-novidade.component';
import { InfoSerieComponent } from './user/info-serie/info-serie.component';
import { PlayerComponent } from './user/player/player.component';
import { AdminIndexComponent } from './admin/admin-index/admin-index.component';
import { AdminRecuperarSenhaComponent } from './admin/admin-recuperar-senha/admin-recuperar-senha.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { AuthGuard } from './services/auth/auth.guard';
import { AuthAdminGuard } from './services/auth/authAdmin.guard';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'recuperarSenha', component: RecuperarSenhaComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'filmes', component: FilmesComponent, canActivate: [AuthGuard] },
  { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
  { path: 'documentarios', component: DocumentariosComponent, canActivate: [AuthGuard] },
  { path: 'novidades', component: NovidadesComponent, canActivate: [AuthGuard] },
  { path: 'configuracoes', component: ConfiguracoesComponent, canActivate: [AuthGuard] },
  { path: 'minhaLista', component: MinhaListaComponent, canActivate: [AuthGuard] },
  { path: 'editarUsuario', component: EditarUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'termos', component: TermosComponent, canActivate: [AuthGuard] },
  { path: 'contato', component: ContatoComponent, canActivate: [AuthGuard] },
  { path: 'infoNovidade', component: InfoNovidadeComponent, canActivate: [AuthGuard] },
  { path: 'infoSerie', component: InfoSerieComponent, canActivate: [AuthGuard] },
  { path: 'player', component: PlayerComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminIndexComponent },
  { path: 'admin/recuperarSenha', component: AdminRecuperarSenhaComponent },
  { path: 'admin/home', component: AdminHomeComponent, canActivate: [AuthAdminGuard] },
  { path: '**', component: Error404Component }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }