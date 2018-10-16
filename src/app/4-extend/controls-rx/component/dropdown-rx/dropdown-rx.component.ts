import { Component, OnInit, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { Dropdown } from 'app/4-extend/controls-rx/class/dropdown';
import { ControlRxComponent } from 'app/4-extend/controls-rx/component/control-rx/control-rx.component';

@Component({
  selector: 'rc-dropdown-rx',
  templateUrl: './dropdown-rx.component.html',
  styleUrls: ['./dropdown-rx.component.scss']
})
export class DropdownRxComponent extends ControlRxComponent implements OnInit {

  formControl: Dropdown;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.formControl = this.getControl() as Dropdown;
  }

}
