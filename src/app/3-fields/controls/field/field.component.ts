import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ControlComponent } from 'app/3-fields/controls/control/control.component';

@Component({
  selector: 'rc-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() innerComponent: ControlComponent;

  get innerControl() { return this.innerComponent && this.innerComponent.formControl; }

  get hasError() { return !!this.innerControl.errors; }

  //  Required Validator helper method
  get isRequired() {
    if (this.innerControl.validator) {
      const validationErrors = this.innerControl.validator({} as AbstractControl);
      return (validationErrors && validationErrors['required']);
    }
  }

  get errorMessage() {
    if (this.innerControl.errors) {
      const errKey = Object.keys(this.innerControl.errors)[0];
      return this.innerComponent.errorMessages[errKey];
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
