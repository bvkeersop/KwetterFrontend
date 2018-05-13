import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { UserService } from '../services/user.service';
import { Notification } from './../model/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notification: Notification;
  text: string;

  constructor(private notificationService: NotificationService, private userService: UserService) {

    if (this.notification == null) {
      this.notification = new Notification("", "");
    }
    notificationService._notification.subscribe(notification => {
      console.log("---notification has been updated---")
      this.notification = notification;
    });
  }

  sendMsg() {
    let newNot = new Notification(this.userService.getUser(), this.text);
    this.notificationService.sendMessage(newNot);
  }

  ngOnInit() {
  }

}
