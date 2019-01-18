import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ElevesComponent} from './eleves/eleves.component';
import {EleveDetailComponent} from './eleve-detail/eleve-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'eleves', component: ElevesComponent},
  { path: 'eleves/:eleveid', component: EleveDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
