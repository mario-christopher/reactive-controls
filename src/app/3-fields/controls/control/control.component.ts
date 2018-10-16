import { Self, Optional, Input, OnInit } from '@angular/core';
import { NgControl, AbstractControl } from '@angular/forms';

import { CVA } from 'app/support/cva';

export abstract class ControlComponent extends CVA implements OnInit {

  @Input() label: string;
  @Input() hint: string;

  get component() { return this; }

  formControl: AbstractControl;

  errorMessages = {
    required: `This is a required field`,
    maxlength: `You've exceeded the max-length for the field.`
  };

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit(): void {
  }

}

