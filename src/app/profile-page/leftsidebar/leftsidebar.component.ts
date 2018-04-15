import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Profile } from './../../model/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  @Input()
  profile: Profile;
  @Input()
  isMyProfile: boolean;

  followers = [];
  following = [];

  constructor(private http: Http, private profileService: ProfileService) {

    this.http.get('./testJson/followers.json').subscribe(res => {
      this.followers = res.json();
    });

    this.http.get('./testJson/following.json').subscribe(res => {
      this.following = res.json();
    });
  }

  followProfile(id) {
    //TODO: fix this ugly stuff
    let profile = new Profile(null, null, null, null, null);
    profile.setId(id);
    this.profileService.followProfile(profile);
  }

  ngOnInit() {
  }

}
