import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NotificationService} from './service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  messages: string[] = [];


  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
  }


}
