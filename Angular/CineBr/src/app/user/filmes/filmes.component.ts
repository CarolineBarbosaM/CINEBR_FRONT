import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { MidiasService } from 'src/app/services/midias/midias.service';
import { AutenticarService } from 'src/app/services/authUser/autenticar.service';

import { Midias } from 'src/app/models/Midias';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  midias$: Observable<Midias[]>;
  userId: Pick<User, "id">;

  constructor(
    private midiaService: MidiasService,
    private authService: AutenticarService
  ) { }

  ngOnInit(): void {
    this.midias$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Midias[]> {
    return this.midiaService.fetchAll();
  }

}
