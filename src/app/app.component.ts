import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private title: Title) {
    router.events.subscribe((val: NavigationEnd) => {
      if(val instanceof NavigationEnd){
        console.log(val.urlAfterRedirects);
        switch (val.urlAfterRedirects) {
          case ('/eleves') : title.setTitle('Liste d\'élèves');break;
          case ('/home') : title.setTitle('Home');break;
          default : title.setTitle('Details');
        }
      }
    });
  }

  ngOnInit(){

  }


}

