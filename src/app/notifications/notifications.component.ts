import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Notification } from './../model/notification';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notification: Notification;

  private notificationSubscription: Subscription;

  constructor(private notificationService: NotificationService) {

    if (this.notification == null) {
      this.notification = new Notification("", "");
    }

    this.notificationSubscription = this.notificationService.notification$.subscribe(notification => {
      this.notification = notification;
    });

    /*
    notificationService.notification.subscribe(notification => {
      console.log("Response from websocket: " + notification.message);
      this.notification = notification;
    });
    */
  }

  private message = {
    sender: 'tutorialedge',
    message: 'this is a test message'
  }

  sendMsg() {
    console.log('new message from client to websocket: ', this.message);
    this.notificationService.notification.next(this.message);
    this.message.message = '';
  }


  ngOnInit() {
  }

}
