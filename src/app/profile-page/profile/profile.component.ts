import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Profile } from "../../model/profile";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  kweets = [];
  profile: Profile;

  constructor(private route: ActivatedRoute) { }

  getKweets(id) {

  }

  getProfile(id) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  }

}
