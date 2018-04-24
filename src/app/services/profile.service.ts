import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from './../model/profile'
import { UserService } from './user.service';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ProfileService {

  private _followers: BehaviorSubject<Profile[]> = new BehaviorSubject<Profile[]>([]);
  followers$ = this._followers.asObservable();

  private _following: BehaviorSubject<Profile[]> = new BehaviorSubject<Profile[]>([]);
  following$ = this._following.asObservable();

  public static readonly CREATE_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/createProfile/";
  public static readonly GET_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/getProfile/";
  public static readonly EDIT_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/editProfile/";
  public static readonly FOLLOW_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/followProfile/";
  public static readonly GET_FOLLOWERS_URL = "http://localhost:8080/Kwetter/api/profile/getFollowers/";
  public static readonly GET_FOLLOWING_URL = "http://localhost:8080/Kwetter/api/profile/getFollowing/";

  constructor(private http: HttpClient, private userService: UserService) { }

  createProfile(profile: Profile) {
    return this.http.post<Profile>(ProfileService.CREATE_PROFILE_URL, profile)
      .subscribe(
        (res) => {
          console.log("POST call successful value returned in body",
            res);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  getProfile(id): Observable<Profile> {
    return this.http.get<Profile>(ProfileService.GET_PROFILE_URL + id);
  }

  followProfile(profile: Profile) {
    return this.http.post<Profile>(ProfileService.FOLLOW_PROFILE_URL, profile)
      .subscribe(
        (res) => {
          console.log("POST call successful value returned in body",
            res);
          this.getFollowers(profile.id);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  getFollowers(id): Observable<Profile[]> {
    console.log("---getting followers---");
    this._followers.next([]);

    const request = this.http.get<Profile[]>(ProfileService.GET_FOLLOWERS_URL + id);
    request.subscribe(result => {
      this._followers.next(result as Profile[]);
    })
    console.log(request);
    return request;
  }

  getFollowing(id): Observable<Profile[]> {
    console.log("---getting following---");
    this._following.next([]);

    const request = this.http.get<Profile[]>(ProfileService.GET_FOLLOWING_URL + id);
    request.subscribe(result => {
      this._following.next(result as Profile[]);
    })
    console.log(request);
    return request;
  }

  editProfile(profile: Profile) {
    return this.http.post<Profile>(ProfileService.EDIT_PROFILE_URL, profile)
      .subscribe(
        (res) => {
          console.log("POST call successful value returned in body",
            res);
          this.userService.updateUser(profile.username);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

}
