import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Profile } from "../../model/profile";
import { KweetService } from '../../services/kweet.service';
import { Kweet } from '../../model/kweet'

import 'rxjs/add/operator/switchMap';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  kweets: Kweet[];
  profile: Profile;
  isMyProfile: boolean;

  constructor(private route: ActivatedRoute, private kweetService: KweetService, private userService: UserService) {
  }

  getKweets(id) {
    this.kweetService.getKweetsByProfileId(id).subscribe(kweets => this.kweets = kweets);
  }

  getProfile(id) {

  }

  checkIsMyProfile(id) {
    if (this.userService.isLoggedIn() === true) {
      let myId = this.userService.getUser().id;
      if (id === myId) {
        this.isMyProfile = true;
      }
    }
    else this.isMyProfile = false;
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getKweets(id);
    this.checkIsMyProfile(id);
  }

}
