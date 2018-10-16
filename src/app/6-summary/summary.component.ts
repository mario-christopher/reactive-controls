import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rc-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  title = 'Summary';
  constructor() { }

  ngOnInit() {
  }

}
