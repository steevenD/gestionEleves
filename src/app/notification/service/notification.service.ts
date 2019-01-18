import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  messages: string[] = [];

  constructor() { }

  getMessages() {
    return this.messages;
  }

  add(msg: string) {
    this.messages.push(msg);
  }

  clear() {
    this.messages = [];
  }
}
