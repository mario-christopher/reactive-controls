import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Self, Optional } from '@angular/core';

export abstract class CVA implements ControlValueAccessor {
  value: any;

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl,
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  getControl() {
    return this.ngControl && this.ngControl.control;
  }

  propagateChange = (value: any) => { };
  propagateTouched = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void { }
}
