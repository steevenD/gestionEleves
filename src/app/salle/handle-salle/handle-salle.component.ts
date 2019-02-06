import { Component, OnInit } from '@angular/core';
import {SalleService} from '../services/salle.service';
import {Salle} from '../salle';

@Component({
  selector: 'app-handle-salle',
  templateUrl: './handle-salle.component.html',
  styleUrls: ['./handle-salle.component.css']
})
export class HandleSalleComponent implements OnInit {

  salles: Salle[];

  constructor(private salleService: SalleService) { }

  ngOnInit() {
    this.getSalles();
  }

  getSalles(){
    return this.salleService.getSalles().subscribe(salles => {
      this.salles = salles;
    });
  }

}
