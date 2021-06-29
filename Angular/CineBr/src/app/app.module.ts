import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './user/recuperar-senha/recuperar-senha.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './user/index/index.component';
import { Error404Component } from './user/error404/error404.component';
import { HomeComponent } from './user/home/home.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
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
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthAdminGuard } from './services/auth/authAdmin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    IndexComponent,
    Error404Component,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FilmesComponent,
    SeriesComponent,
    DocumentariosComponent,
    NovidadesComponent,
    ConfiguracoesComponent,
    MinhaListaComponent,
    EditarUsuarioComponent,
    TermosComponent,
    ContatoComponent,
    InfoNovidadeComponent,
    InfoSerieComponent,
    PlayerComponent,
    AdminIndexComponent,
    AdminRecuperarSenhaComponent,
    AdminHomeComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
