import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { Control } from 'app/4-extend/controls-rx/class/control';

@Component({
  selector: 'rc-field-rx',
  templateUrl: './field-rx.component.html',
  styleUrls: ['./field-rx.component.scss']
})
export class FieldRxComponent implements OnInit {

  @Input() innerFormControl: Control;
  get hasError() { return !!this.innerFormControl.errors; }

  get isRequired() {
    if (this.innerFormControl.validator) {
      const validationErrors = this.innerFormControl.validator({} as AbstractControl);
      return (validationErrors && validationErrors['required']);
    }
  }

  get errorMessage() {
    if (this.innerFormControl.errors) {
      const errKey = Object.keys(this.innerFormControl.errors)[0];
      return this.innerFormControl.errorMessages[errKey];
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
