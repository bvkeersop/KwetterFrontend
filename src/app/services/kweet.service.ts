import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Kweet } from '../model/kweet';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { UserService } from './user.service';

import { User } from '../model/user';

@Injectable()
export class KweetService {

  private _kweets: BehaviorSubject<Kweet[]> = new BehaviorSubject<Kweet[]>([]);
  kweets$ = this._kweets.asObservable();

  public static readonly GET_ALL_KWEETS_URL = "http://localhost:8080/Kwetter/api/kweet/getAllKweets";
  public static readonly GET_KWEETSBYPROFILEID_URL = "http://localhost:8080/Kwetter/api/kweet/getKweetsByProfileId/";
  public static readonly CREATE_KWEET_URL = "http://localhost:8080/Kwetter/api/kweet/createKweet";

  constructor(private http: HttpClient, private userService: UserService) { }

  getAllKweets(): Observable<Kweet[]> {
    return this.http.get<Kweet[]>(KweetService.GET_ALL_KWEETS_URL)
      .pipe(
        catchError(this.handleError('getAllKweets', []))
      );
  }

  getKweetsByProfileId(id): Observable<Kweet[]> {
    this._kweets.next([]);

    const request = this.http.get<Kweet[]>(KweetService.GET_KWEETSBYPROFILEID_URL + id);
    request.subscribe(result => {
      this._kweets.next(result as Kweet[]);
    })
    return request;
  }

  createKweet(kweet: Kweet) {
    return this.http.post<Kweet>(KweetService.CREATE_KWEET_URL, kweet)
      .subscribe(
        (res) => {
          console.log("POST call successful value returned in body",
            res);
          this.getKweetsByProfileId(this.userService.getUser().id);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
