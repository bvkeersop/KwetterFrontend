import { Component, OnInit, Input } from '@angular/core';
import { Kweet } from '../model/kweet';

@Component({
  selector: 'app-kweets',
  templateUrl: './kweets.component.html',
  styleUrls: ['./kweets.component.css']
})
export class KweetsComponent implements OnInit {

  @Input()
  kweets: Kweet[];

  constructor() { }

  ngOnInit() {
  }

}
