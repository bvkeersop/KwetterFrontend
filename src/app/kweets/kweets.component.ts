import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-kweets',
  templateUrl: './kweets.component.html',
  styleUrls: ['./kweets.component.css']
})
export class KweetsComponent implements OnInit {
  kweets = [];

  constructor(private http: Http) {

    this.http.get('./testJson/kweets.json').subscribe(res => {
      this.kweets = res.json();
    });

  }

  ngOnInit() {
  }

}
