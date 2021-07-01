import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { Midias } from 'src/app/models/Midias';
import { User } from 'src/app/models/User';

import { ErrorHandleService } from '../errorHandler/error-handle.service';

@Injectable({
  providedIn: 'root'
})
export class MidiasService {

  private url = "http://127.0.0.1:3333/filmes/listAll";
  private urlSeries = "http://127.0.0.1:3333/series/listAll";

  private urlDocs = "http://127.0.0.1:3333/documentarios/listAll";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandleService
  ) { }

  fetchAll(): Observable<Midias[]> {
    return this.http
      .get<Midias[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Midias[]>("fetchAll", []))
      );
  }

  fetchSeries(): Observable<Midias[]> {
    return this.http
      .get<Midias[]>(this.urlSeries, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Midias[]>("fetchSeries", []))
      );
  }

  fetchDocumentarios(): Observable<Midias[]> {
    return this.http
      .get<Midias[]>(this.urlDocs, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Midias[]>("fetchDocumentarios", []))
      );
  }
}