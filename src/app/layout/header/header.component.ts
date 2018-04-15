import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Profile } from '../../model/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private loggedIn = false;
  private user;

  private subscription: Subscription;

  constructor(private userService: UserService, private router: Router) {
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

  myProfile() {
    console.log("click");
    this.router.navigate(['profile', this.user.id]);
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
