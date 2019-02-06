import {Component, Input, OnInit} from '@angular/core';
import {Salle} from '../salle';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-loop-salle',
  templateUrl: './loop-salle.component.html',
  styleUrls: ['./loop-salle.component.css']
})
export class LoopSalleComponent implements OnInit {

  @Input()
  salles: Salle[];

  rowSalleCurrent: Salle;

  constructor(private title: Title) { }

  ngOnInit() {
  }

  changeTitle(salle: Salle){
    this.title.setTitle(salle.nom);
  }

  getSalleActive(salle: Salle){
    this.changeTitle(salle);
    this.rowSalleCurrent = salle;
  }

}
