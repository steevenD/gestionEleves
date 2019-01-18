import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Eleve, eleves} from '../eleve';
import {EleveService} from '../eleves/eleve.service';

@Component({
  selector: 'app-eleve-detail',
  templateUrl: './eleve-detail.component.html',
  styleUrls: ['./eleve-detail.component.css']
})
export class EleveDetailComponent implements OnInit {

  eleve : any;

  constructor(private route: ActivatedRoute, private router: Router, private eleveService: EleveService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('eleveid');
        this.eleveService.getEleve(parseInt(id, 10)).subscribe(
          eleve => this.eleve = eleve
      );
      }
    );
  }

  goBack() {
    this.router.navigate(['eleves']);
  }

}
