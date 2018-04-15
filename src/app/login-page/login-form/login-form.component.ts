import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;

  constructor(private userService: UserService, private router: Router) { }

  login() {
    this.userService.login(this.email, this.password);
    this.router.navigate(['Home']);
  }

  ngOnInit() {
  }

}
