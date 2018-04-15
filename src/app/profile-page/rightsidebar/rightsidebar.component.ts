import { Component, OnInit } from '@angular/core';
import { KweetService } from '../../services/kweet.service';
import { Kweet } from '../../model/kweet';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit {

  kweetText: string;
  isMyProfile: boolean = false;

  constructor(private kweetService: KweetService) { }

  createKweet() {
    let date = new Date().toLocaleString();
    let kweet = new Kweet(this.kweetText);
    this.kweetService.createKweet(kweet);
  }

  ngOnInit() {
  }

}
