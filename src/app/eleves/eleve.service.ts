import { Injectable } from '@angular/core';
import {Eleve, eleves} from '../eleve';
import {of} from 'rxjs/internal/observable/of';
import {Observable} from 'rxjs/internal/Observable';
import {from} from 'rxjs/internal/observable/from';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {NotificationService} from '../notification/service/notification.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  getAllEleves() {
    // return from(eleves);
    return this.http.get('/api/eleves');
  }

  getEleve(id: number){
    // for (let e of eleves){
    //   if (e.id === id){
        // return of(e);
        return this.http.get(`/api/eleves/${id.toString()}`);
    //   }
    // }
  }

  addEleve(eleve : Eleve){
    // eleves.push(eleve);
    return this.http.post<Eleve>(`/api/eleves`, eleve, httpOptions).pipe(
      // tap(e => this.log('Elève ajouté'+ e.nom)),
    );

  }

  updateEleve(eleve: Eleve){
    return this.http.post(`/api/eleves`, eleve, httpOptions).pipe(
      tap(_ => this.log('Elève mis à jour')),
    );
  }

  deleteEleve(id: number){
    // const id = typeof eleve === 'number' ? eleve: eleve.id;
    return this.http.delete(`/api/eleves/${id}`).pipe(
      tap(_ => this.log('Elève supprimé')),
    );
  }

  private log(message: string) {
    this.notificationService.add(`${message}`);
  }
}
