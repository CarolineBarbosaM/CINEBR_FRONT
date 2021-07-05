import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';


const LOGIN: Route = {
  path: 'login',
  component: LoginComponent
};

const REGISTER: Route = {
  path: 'cadastro',
  component: CadastroComponent
};

const ESQUECI_SENHA: Route = {
  path: 'senha',
  component: RecuperarSenhaComponent
};

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      LOGIN,
      REGISTER,
      ESQUECI_SENHA
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule { }