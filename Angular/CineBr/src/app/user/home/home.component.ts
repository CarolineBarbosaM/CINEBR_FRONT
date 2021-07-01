import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { MidiasService } from 'src/app/services/midias/midias.service';
import { AutenticarService } from 'src/app/services/authUser/autenticar.service';

import { Midias } from 'src/app/models/Midias';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  midias$: void;
  userId: Pick<User, "id">;

  constructor(
    private midiaService: MidiasService,
    private authService: AutenticarService
  ) { }

  ngOnInit(): void {
    this.midias$ = this.get();
    this.userId = this.authService.userId;
  }

  get(){
    return this.midiaService.listar();
  }

}