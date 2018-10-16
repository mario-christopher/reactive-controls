import { Component, OnInit, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { Textbox } from 'app/4-extend/controls-rx/class/textbox';
import { ControlRxComponent } from 'app/4-extend/controls-rx/component/control-rx/control-rx.component';

@Component({
  selector: 'rc-textbox-rx',
  templateUrl: './textbox-rx.component.html',
  styleUrls: ['./textbox-rx.component.scss']
})
export class TextboxRxComponent extends ControlRxComponent implements OnInit {

  formControl: Textbox;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.formControl = this.getControl() as Textbox;
  }

}
