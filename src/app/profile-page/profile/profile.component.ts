import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Profile } from "../../model/profile";
import { KweetService } from '../../services/kweet.service';
import { Kweet } from '../../model/kweet'
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';
import { UserService } from '../../services/user.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  kweets: Kweet[];
  profile: Profile;
  followers: Profile[];
  following: Profile[];
  isMyProfile: boolean;

  private subscription: Subscription;
  private subscription_followers: Subscription;
  private subscription_following: Subscription;

  constructor(private route: ActivatedRoute,
    private kweetService: KweetService,
    private userService: UserService,
    private profileService: ProfileService) {

    this.subscription = this.kweetService.kweets$.subscribe(kweets => {
      this.kweets = kweets;
    });

    this.subscription_followers = this.profileService.followers$.subscribe(followers => {
      this.followers = followers;
    });

    this.subscription_followers = this.profileService.following$.subscribe(following => {
      this.following = following;
    });
  }

  getKweets(id) {
    this.kweetService.getKweetsByProfileId(id).subscribe(kweets => this.kweets = kweets);
  }

  getProfile(id) {
    this.profileService.getProfile(id).subscribe(profile => this.profile = profile);
  }

  getFollowers(id) {
    this.profileService.getFollowers(id).subscribe(followers => this.followers = followers);
  }

  getFollowing(id) {
    this.profileService.getFollowing(id).subscribe(following => this.following = following);
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
    this.getProfile(id);
    this.getFollowers(id);
    this.getFollowing(id);
    this.checkIsMyProfile(id);
  }

}
