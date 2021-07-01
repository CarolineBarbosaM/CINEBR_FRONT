import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { MidiasService } from 'src/app/services/midias/midias.service';
import { AutenticarService } from 'src/app/services/authUser/autenticar.service';

import { Midias } from 'src/app/models/Midias';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-documentarios',
  templateUrl: './documentarios.component.html',
  styleUrls: ['./documentarios.component.css']
})
export class DocumentariosComponent implements OnInit {
  documentarios$: Observable<Midias[]>;
  userId: Pick<User, "id">;

  constructor(
    private midiaService: MidiasService,
    private authService: AutenticarService
  ) { }

  ngOnInit(): void {
    this.documentarios$ = this.fetchDocumentario();
    this.userId = this.authService.userId;
  }

  fetchDocumentario(): Observable<Midias[]> {
    return this.midiaService.fetchDocumentarios();
  }
}
