import { Component, OnInit, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ControlComponent } from 'app/3-fields/controls/control/control.component';

@Component({
  selector: 'rc-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent extends ControlComponent implements OnInit {

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
