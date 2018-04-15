import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from './../../model/profile';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  email: string;
  password: string;
  username: string;

  constructor(private profileService: ProfileService, private router: Router) { }

  createProfile() {
    //TODO: fix this ugly stuff
    let profile = new Profile(this.username, null, this.password, null, null);
    profile.setEmail(this.email);
    profile.setPassword(this.password);
    this.profileService.createProfile(profile);
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
