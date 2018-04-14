import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

  }

  login() {
    console.log('login called');
    this.userService.login("email", "password");
    this.router.navigate(['Home']);
  }

  ngOnInit() {
  }

}
