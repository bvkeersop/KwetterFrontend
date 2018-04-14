import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {

  followers = [];
  following = [];

  constructor(private http: Http) {

    this.http.get('./testJson/followers.json').subscribe(res => {
      this.followers = res.json();
    });

    this.http.get('./testJson/following.json').subscribe(res => {
      this.following = res.json();
    });
  }

  ngOnInit() {
  }

}
