import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { UserService } from 'src/app/services/user/user.service';
import { AutenticarService } from 'src/app/services/authUser/autenticar.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
  user$: Observable<User[]>;
  userId: Pick<User, "id">;

  constructor(
    private userService: UserService,
    private authService: AutenticarService
  ) { }

  ngOnInit(): void {
    this.userId = this.authService.userId;
    this.user$ = this.fetchUser();
    this.userService.echo();
  }

  fetchUser(): Observable<User[]> {
    return this.userService.fetchAll();
  }

}
