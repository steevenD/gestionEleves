import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonComponentComponent } from './mon-component/mon-component.component';
import { ElevesComponent } from './eleves/eleves.component';
import { MineurPipe } from './eleves/mineur.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EleveDetailComponent } from './eleve-detail/eleve-detail.component';
import { NotificationComponent } from './notification/notification.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {httpInterceptorProviders} from './http-interceptors';
import { Error404Component } from './http-interceptors/error404/error404.component';
import { HandleSalleComponent } from './salle/handle-salle/handle-salle.component';
import { LoopSalleComponent } from './salle/loop-salle/loop-salle.component';
import { RowSalleComponent } from './salle/row-salle/row-salle.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComponentComponent,
    ElevesComponent,
    MineurPipe,
    HomeComponent,
    EleveDetailComponent,
    NotificationComponent,
    Error404Component,
    HandleSalleComponent,
    LoopSalleComponent,
    RowSalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})

  ],
  providers: [
    // httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
