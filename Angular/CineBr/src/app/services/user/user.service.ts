import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { User } from 'src/app/models/User';

import { ErrorHandleService } from '../errorHandler/error-handle.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://127.0.0.1:3333/user/list/";
  userId = localStorage['id'];
  

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandleService
  ) { }

  fetchAll(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url + this.userId,{ responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<User[]>("fetchAll", []))
      );
  }

  echo(){
    console.log(this.url + this.userId);
  }
}
