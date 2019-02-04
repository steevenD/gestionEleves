import { Component, OnInit } from '@angular/core';
import {EleveService} from '../eleves/eleve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  user: any = {name: 'Paul'};
  hidden = false;
  color = 'black';

  constructor(private eleveService: EleveService) { }

  ngOnInit() {
  }

  getApiGitHub() {
    this.eleveService.getApiGitHub().subscribe(res => {
      console.log(res);
    });
  }

  getApiGitHubError() {
    this.eleveService.getApiGitHubError().subscribe(res => {
      console.log(res);
    });
  }
}
