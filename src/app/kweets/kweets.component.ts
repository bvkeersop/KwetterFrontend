import { Component, OnInit, Input } from '@angular/core';
import { Kweet } from '../model/kweet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kweets',
  templateUrl: './kweets.component.html',
  styleUrls: ['./kweets.component.css']
})
export class KweetsComponent implements OnInit {

  @Input()
  kweets: Kweet[];

  constructor(private router: Router) {
  }

  goToProfile(id) {
    console.log("click");
    this.router.navigate(['profile', id]);
  }

  ngOnInit() {
  }

}
