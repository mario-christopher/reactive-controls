import { OnInit, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { CVA } from 'app/support/cva';
import { Control } from 'app/4-extend/controls-rx/class/control';

export class ControlRxComponent extends CVA implements OnInit {

  formControl: Control;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit() {
  }

}
