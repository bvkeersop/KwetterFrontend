import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { Notification } from './../model/notification'

const NOTIFICATION_URL = 'ws://localhost:8080/Kwetter/socket'

@Injectable()
export class NotificationService {

  public notification: Subject<Notification>;
  notification$ = this.notification.asObservable();

  constructor(wsService: WebsocketService) {

    if (this.notification == null) {
      let def = new Notification("", "");
      this.notification.next(def);
    }

    this.notification = <Subject<Notification>>wsService
      .connect(NOTIFICATION_URL)
      .map((response: MessageEvent): Notification => {
        let data = response.data;

        let notification = new Notification("sender", data);

        this.notification.next(notification);

        return {
          sender: "tmp",
          message: data.message
        }

      });
  }
}
