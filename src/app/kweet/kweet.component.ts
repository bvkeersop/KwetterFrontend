import { Component, OnInit, Input } from '@angular/core';
import { Kweet } from '../model/kweet';
import { Router } from '@angular/router';
import { Profile } from '../model/profile';
import { UserService } from '../services/user.service';
import { KweetService } from '../services/kweet.service';

@Component({
  selector: 'app-kweet',
  templateUrl: './kweet.component.html',
  styleUrls: ['./kweet.component.css']
})
export class KweetComponent implements OnInit {

  @Input()
  kweet: Kweet;

  constructor(private router: Router, private userService: UserService, private kweetService: KweetService) {
  }

  goToProfile(id) {
    this.router.navigate(['profile', id]);
  }

  toggleLike(kweet) {
    if (!this.isLikedByMe()) {
      console.log("like");
      this.kweetService.likeKweet(kweet);
    }
    else {
      console.log("unlike");
      this.kweetService.unlikeKweet(kweet);
    }
  }

  isLikedByMe() {
    if (this.userService.isLoggedIn() == true) {
      const id = this.userService.getUser().id;
      return this.kweet.likedBy.map(p => p.id).indexOf(id, 0) != -1;
    }
  }

  getLikes() {
    return this.kweet.likedBy.length;
  }

  ngOnInit() {
  }

}
