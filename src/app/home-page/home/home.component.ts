import { Component, OnInit } from '@angular/core';
import { KweetService } from '../../services/kweet.service';
import { Kweet } from '../../model/kweet'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  kweets: Kweet[];

  constructor(private kweetService: KweetService) { }

  ngOnInit() {
    this.getAllKweets();
  }

  getAllKweets() {
    console.log("Getting kweets");
    this.kweetService.getAllKweets().subscribe(kweets => this.kweets = kweets);
    console.log(this.kweets);
  }

}
