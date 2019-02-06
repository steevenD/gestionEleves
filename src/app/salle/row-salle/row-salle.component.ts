import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Salle} from '../salle';
import {NotificationService} from '../../notification/service/notification.service';

@Component({
  selector: 'app-row-salle',
  templateUrl: './row-salle.component.html',
  styleUrls: ['./row-salle.component.css']
})
export class RowSalleComponent implements OnInit {

  @Input()
  salle : Salle;

  @Output()
  salleActive = new EventEmitter<Salle>();

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  handleClickSalle(salle: Salle) {
    this.salleActive.emit(salle);
    this.log('Vous avez cliqué sur la salle ' + salle.nom);
  }

  private log(message: string) {
    this.notificationService.add(`${message}`);
  }

}
