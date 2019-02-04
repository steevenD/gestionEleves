import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ElevesComponent} from './eleves/eleves.component';
import {EleveDetailComponent} from './eleve-detail/eleve-detail.component';
import {Error404Component} from './http-interceptors/error404/error404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'eleves', component: ElevesComponent},
  { path: 'eleves/:eleveid', component: EleveDetailComponent },
  { path: 'error', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
