import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { Notification } from './../model/notification'

const NOTIFICATION_URL = 'ws://localhost:8080/Kwetter/socket'


@Injectable()
export class NotificationService {

  public _notification: ReplaySubject<Notification>;

  constructor(websocketService: WebsocketService) {

    this._notification = <ReplaySubject<Notification>>websocketService
      .connect(NOTIFICATION_URL)
      .map((response: MessageEvent): Notification => {
        let data = JSON.parse(response.data);
        return {
          sender: data.author,
          message: data.message
        }
      });
  }

  sendMessage(message) {
    console.log("---calling .next()---");
    this._notification.next(message);
  }
}
