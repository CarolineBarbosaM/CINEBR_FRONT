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
  midias$: Observable<Midias[]>;
  series$: Observable<Midias[]>;
  documentarios$: Observable<Midias[]>;
  userId: Pick<User, "id">;

  constructor(
    private midiaService: MidiasService,
    private authService: AutenticarService
  ) { }

  ngOnInit(): void {
    this.midias$ = this.fetchAll();
    this.series$ = this.fetchSeries();
    this.documentarios$ = this.fetchDocumentario();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Midias[]> {
    return this.midiaService.fetchAll();
  }

  fetchSeries(): Observable<Midias[]> {
    return this.midiaService.fetchSeries();
  }

  fetchDocumentario(): Observable<Midias[]> {
    return this.midiaService.fetchDocumentarios();
  }
}