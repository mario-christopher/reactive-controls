import { Component, OnInit, Self, Optional, Input, OnDestroy } from '@angular/core';
import { NgControl, FormArray, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ControlComponent } from 'app/3-fields/controls/control/control.component';
import { Option } from 'app/support/model';

@Component({
  selector: 'rc-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends ControlComponent implements OnInit, OnDestroy {

  @Input() options: Option[] = [];
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
    this.formControl = this.getControl();

    if (this.formControl) {
      this.createCheckBoxes();
      this.subscription = this.formControl.valueChanges.subscribe(value => {
        this.createCheckBoxes();
      });
    }
  }

  private createCheckBoxes() {
    this.checkboxes = new FormArray(
      this.options.map(o => new FormControl(this.formControl.value.includes(o.id)))
    );

    this.checkboxes.valueChanges.subscribe((values: boolean[]) => {
      const value = [];
      values.forEach((v: boolean, i: number) => {
        if (v) {
          value.push(this.options[i].id);
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
