import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pageContent = {
    header: {
      title: 'My Food List',
      body: 'This is the list of the meals i have eaten',
    },
  };
}
