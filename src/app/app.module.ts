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

@NgModule({
  declarations: [
    AppComponent,
    MonComponentComponent,
    ElevesComponent,
    MineurPipe,
    HomeComponent,
    EleveDetailComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
