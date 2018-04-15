import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User } from '../model/user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  public static readonly LOGIN_URL = "http://localhost:8080/Kwetter/api/authentication/login";
  public static readonly USER_KEY = 'PROFILE';
  public static readonly LOGGED_IN_KEY = 'LOGGED_IN';

  private _profile = new BehaviorSubject<User>(null);
  profile$ = this._profile.asObservable();

  constructor(private http: Http) { }

  login(email, password) {
    console.log('loginservice called');

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(UserService.LOGIN_URL, JSON.stringify({ email, password }), { headers })
      .subscribe(
        (res) => {
          console.log("POST call successful value returned in body",
            res);
          this.createUser(res.text());
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  createUser(u) {
    let userObj = JSON.parse(u);
    let user = new User(userObj.id, userObj.username, userObj.avatar, userObj.email, userObj.token);
    localStorage.setItem(UserService.USER_KEY, JSON.stringify(user));
    localStorage.setItem(UserService.LOGGED_IN_KEY, "true");
    this._profile.next(user);
  }

  updateUser(newUsername) {
    let userObj = JSON.parse(localStorage.getItem(UserService.USER_KEY));
    let user = new User(userObj.id, newUsername, userObj.avatar, userObj.email, userObj.token);
    localStorage.setItem(UserService.USER_KEY, JSON.stringify(user));
    this._profile.next(user);
  }

  logout() {
    localStorage.removeItem(UserService.LOGGED_IN_KEY);
    localStorage.removeItem(UserService.USER_KEY);
    this._profile.next(null);
  }

  isLoggedIn() {
    return !!localStorage.getItem(UserService.LOGGED_IN_KEY);
  }

  getUser() {
    return JSON.parse(localStorage.getItem(UserService.USER_KEY));
  }

  getToken() {
    return JSON.parse(localStorage.getItem(UserService.USER_KEY)).token;
  }
}
