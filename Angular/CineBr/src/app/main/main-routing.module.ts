import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

const AUTH_ROUTE: Route = {
  path: 'auth',
  loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
};

const MAIN_ROUTE: Route = {
  path: '',
  loadChildren: () => import('./main/main.module').then(m => m.MainModule)
}

const routes: Routes = [
  {path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  AUTH_ROUTE,
  MAIN_ROUTE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }