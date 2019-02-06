import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Salle} from '../salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http: HttpClient) { }

  getSalles(){
    return this.http.get<Salle[]>('/api/salles/');
  }
}
