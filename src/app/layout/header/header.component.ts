import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Profile } from '../../model/profile';
import { User } from '../../model/user';
import { Notification } from '../../model/notification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private notification: Notification;
  private loggedIn = false;
  private user: User;

  private subscription: Subscription;

  constructor(private userService: UserService, private router: Router, private notificationService: NotificationService) {

    console.log("---constructor headercomponent---");
    console.log(this.notification);

    this.notificationService._notification.subscribe(notification => {
      console.log("---header notification has been updated---");
      this.notification = notification;
    });

    if (this.notification == null) {
      this.notification = new Notification("", "");
    }

    this.subscription = this.userService.profile$.subscribe(user => {
      this.user = user;
      if (user !== null) {
        this.loggedIn = true;
      }
      else this.loggedIn = false;
    });

    this.loggedIn = userService.isLoggedIn();
    this.user = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['home']);
  }

  home() {
    this.router.navigate(['home']);
  }

  myProfile() {
    console.log("click");
    this.router.navigate(['profile', this.userService.getUser().id]);
  }

  getLoggedIn(): void {
    this.loggedIn = !!this.userService.isLoggedIn();
  }

  ngOnInit() {
    this.getLoggedIn();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
