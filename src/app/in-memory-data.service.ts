import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Eleve, eleves} from './eleve';
import {Salle, salles} from './salle/salle';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


  createDb() {
    return {eleves, salles};
  }

  // genId(eleves: Eleve[]): number {
  //   return eleves.length > 0 ? Math.max(...eleves.map(eleve => eleve.id)) + 1 : 11;
  // }

  genId<T extends Eleve | Salle>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 11;
  }
}
