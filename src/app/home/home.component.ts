import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
