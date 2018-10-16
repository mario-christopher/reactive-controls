import { Component, OnInit, Self, Optional, OnDestroy } from '@angular/core';
import { NgControl, FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Checkbox } from 'app/4-extend/controls-rx/class/checkbox';
import { ControlRxComponent } from 'app/4-extend/controls-rx/component/control-rx/control-rx.component';

@Component({
  selector: 'rc-checkbox-rx',
  templateUrl: './checkbox-rx.component.html',
  styleUrls: ['./checkbox-rx.component.scss']
})
export class CheckboxRxComponent extends ControlRxComponent implements OnInit, OnDestroy {

  formControl: Checkbox;
  checkboxes: FormArray = new FormArray([]);
  subscription: Subscription;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.formControl = this.getControl() as Checkbox;

    if (this.formControl) {
      this.createCheckBoxes();
      this.subscription = this.formControl.valueChanges.subscribe(value => {
        this.createCheckBoxes();
      });
    }
  }

  private createCheckBoxes() {
    this.checkboxes = new FormArray(
      this.formControl.options.map(o => new FormControl(this.formControl.value.includes(o.id)))
    );

    this.checkboxes.valueChanges.subscribe((values: boolean[]) => {
      const value = [];
      values.forEach((v: boolean, i: number) => {
        if (v) {
          value.push(this.formControl.options[i].id);
        }
      });
      this.formControl.patchValue(value);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
