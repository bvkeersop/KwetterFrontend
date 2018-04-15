import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { UserService } from '../../services/user.service';
import { Profile } from '../../model/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {

  username: string;
  biography: string;
  password: string;
  website: string;
  location: string;

  profile: Profile;

  constructor(private profileService: ProfileService,
    private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    console.log("getting profile");
    if (this.userService.isLoggedIn()) {
      //Todo: get profile values and show in fields.
    }
    else { this.router.navigate(['home']); }
  }

  editProfile() {
    let profile = new Profile(this.username, this.biography, this.password, this.location, this.website);
    this.profileService.editProfile(profile);
  }

}
