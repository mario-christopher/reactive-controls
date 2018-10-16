import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header: string;
  get today() {
    return new Date().toDateString();
  }

  constructor() { }

  ngOnInit() {
  }

}
