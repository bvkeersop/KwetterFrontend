import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { UserService } from '../services/user.service';

@Injectable()
export class Authentication implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.userService.isLoggedIn()) {
      return next.handle(request);
    }

    let clonedRequest = request.clone({
      setHeaders: {
        Authorization: "Bearer " + this.userService.getToken()
      }
    });

    return next.handle(clonedRequest);
  }
}