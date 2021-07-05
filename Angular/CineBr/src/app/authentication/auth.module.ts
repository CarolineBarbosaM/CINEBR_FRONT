import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { AutenticarService } from './services/autenticar.service';


@NgModule({
  declarations: [
    AuthComponent,
    CadastroComponent,
    LoginComponent,
    RecuperarSenhaComponent,
  ],
  providers:[
    AutenticarService
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }