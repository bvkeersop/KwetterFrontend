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
  @Input()
  followers: Profile[];
  @Input()
  following: Profile[];

  constructor(private http: Http, private profileService: ProfileService) {
  }

  followProfile(id) {
    //TODO: fix this ugly stuff
    let profile = new Profile(null, null, null, null, null);
    profile.setId(id);
    this.profileService.followProfile(profile);
  }

  isProfileDefined() {
    if (this.profile == undefined) {
      return false;
    }
    else return true;
  }

  ngOnInit() {
  }

}
