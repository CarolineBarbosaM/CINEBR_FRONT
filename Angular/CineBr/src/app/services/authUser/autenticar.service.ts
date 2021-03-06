import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";


import { User } from '../../models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';

import { ErrorHandleService } from '../errorHandler/error-handle.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  private urlCadastro = "http://127.0.0.1:3333/user/create";
  private urlLogin = "http://127.0.0.1:3333/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  userId: Pick<User, "id">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  constructor(private http: HttpClient, private errorHandleService: ErrorHandleService, private router: Router) { }

  cadastrar(user: Omit<User, "id">): Observable<User>{
    return this.http.post<User>(this.urlCadastro, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandleService.handleError<User>("cadastrar"))
    )
  }

  login(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    userId: Pick<User, "id">;
  }> {
    return this.http
      .post(this.urlLogin, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; userId: Pick<User, "id"> }) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          localStorage.setItem("id", JSON.stringify(tokenObject.userId));
          this.isUserLoggedIn$.next(true);
          this.router.navigate(["home"]);
        }),
        catchError(
          this.errorHandleService.handleError<{
            token: string;
            userId: Pick<User, "id">;
          }>("login")
        )
      );
  }
}