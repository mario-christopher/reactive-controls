import { Component, OnInit, Self, Optional, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ControlComponent } from 'app/3-fields/controls/control/control.component';
import { Option } from 'app/support/model';

@Component({
  selector: 'rc-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends ControlComponent implements OnInit {

  @Input() options: Option[] = [];

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.formControl = this.getControl();
  }

}
