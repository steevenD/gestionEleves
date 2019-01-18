import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-component',
  templateUrl: './mon-component.component.html',
  styleUrls: ['./mon-component.component.css']
})
export class MonComponentComponent implements OnInit {


  playerClass = 'Ma classs';
  playerLevel = '20';


  constructor() { }

  ngOnInit() {
  }

  getPlayerLevel(){
    return this.playerLevel;
  }

}

export abstract class Person {

  nom: string;
  prenom: string;

  constructor(public n: string, public p: string){
    this.nom = n;
    this.prenom = p;
  }

}

export class Attaquant extends Person {

  pointDeVie = 20;

  constructor(nom: string, p: string){
    super(nom, p);
  }

  attaquer(a: Attaquant, point: number){
    a.pointDeVie = a.pointDeVie - point;
  }

}

export class Druide extends Person {


  constructor(nom: string, p: string) {
    super(nom, p);
  }

  reccupererVie(a: Attaquant, point: number) {
    a.pointDeVie = a.pointDeVie + point;
  }
}


const h = new Attaquant('Hunter 1', 'Paul');
const h2 = new Attaquant('Hunter 2', 'Jacques');
const h3 = new Attaquant('Hunter 3', 'Pierre');
const d = new Druide('Druide', 'DD');

h.attaquer(h2, 10);
d.reccupererVie(h2, 50);
h3.attaquer(h, 30);


