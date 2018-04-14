import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  navLinks = [
    { label: 'Login', link: '/login' },
    { label: 'Register', link: '/register' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
