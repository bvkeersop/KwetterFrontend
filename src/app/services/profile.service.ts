import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from './../model/profile'
import { UserService } from './user.service';

@Injectable()
export class ProfileService {

  public static readonly CREATE_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/createProfile/";
  public static readonly GET_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/getProfile/";
  public static readonly EDIT_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/editProfile/";
  public static readonly FOLLOW_PROFILE_URL = "http://localhost:8080/Kwetter/api/profile/followProfile/";

  constructor(private http: HttpClient, private userService: UserService) { }

  createProfile(profile: Profile) {
    return this.http.post<Profile>(ProfileService.CREATE_PROFILE_URL, profile)
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

  getProfile(id): Observable<Profile> {
    return this.http.get<Profile>(ProfileService.GET_PROFILE_URL + id);
  }

  followProfile(profile: Profile) {
    return this.http.post<Profile>(ProfileService.FOLLOW_PROFILE_URL, profile)
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
