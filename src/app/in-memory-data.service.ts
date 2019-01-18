import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Eleve, eleves} from './eleve';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {


  createDb() {
    return {eleves};
  }

  genId(eleves: Eleve[]): number {
    return eleves.length > 0 ? Math.max(...eleves.map(eleve => eleve.id)) + 1 : 11;
  }
}
