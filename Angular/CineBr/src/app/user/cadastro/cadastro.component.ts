import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AutenticarService } from 'src/app/services/authUser/autenticar.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private authService: AutenticarService, private router: Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name_user: new FormControl("", [Validators.required]),
      dt_nascimento: new FormControl("", [Validators.required]),
      sexo: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [ Validators.required]),
    });
  }

  cadastrar(): void {
    this.authService.cadastrar(this.cadastroForm.value).subscribe((msg) => {
      console.log(this.cadastroForm.value);
      this.router.navigate(["login"]);
    });
  }
}
