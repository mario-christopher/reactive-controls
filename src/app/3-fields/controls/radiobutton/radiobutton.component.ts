import { Component, OnInit, Self, Optional, Input, OnDestroy } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ControlComponent } from 'app/3-fields/controls/control/control.component';
import { Option } from 'app/support/model';

@Component({
  selector: 'rc-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent extends ControlComponent implements OnInit, OnDestroy {

  @Input() options: Option[] = [];
  @Input() radioGroupName: string;

  radiobutton: FormControl;
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
      this.createRadioControl();
      this.subscription = this.formControl.valueChanges.subscribe(value => {
        this.createRadioControl();
      });
    }
  }

  private createRadioControl() {
    this.radiobutton = new FormControl(this.formControl.value);
    this.radiobutton.valueChanges.subscribe(radiobuttonValue => {
      this.formControl.patchValue(this.options.find(o => o.id === radiobuttonValue).id);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
