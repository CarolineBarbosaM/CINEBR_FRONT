import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { MidiasService } from 'src/app/services/midias/midias.service';
import { AutenticarService } from 'src/app/services/authUser/autenticar.service';

import { Midias } from 'src/app/models/Midias';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series$: Observable<Midias[]>;
  userId: Pick<User, "id">;

  constructor(
    private midiaService: MidiasService,
    private authService: AutenticarService
  ) { }

  ngOnInit(): void {
    this.series$ = this.fetchSeries();
    this.userId = this.authService.userId;
  }

  fetchSeries(): Observable<Midias[]> {
    return this.midiaService.fetchSeries();
  }
}
