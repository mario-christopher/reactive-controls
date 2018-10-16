import { Component, OnInit, Self, Optional, OnDestroy } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Radiobutton } from 'app/4-extend/controls-rx/class/radiobutton';
import { ControlRxComponent } from 'app/4-extend/controls-rx/component/control-rx/control-rx.component';

@Component({
  selector: 'rc-radiobutton-rx',
  templateUrl: './radiobutton-rx.component.html',
  styleUrls: ['./radiobutton-rx.component.scss']
})
export class RadiobuttonRxComponent extends ControlRxComponent implements OnInit, OnDestroy {

  formControl: Radiobutton;
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
    this.formControl = this.getControl() as Radiobutton;

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
      this.formControl.patchValue(this.formControl.options.find(o => o.id === radiobuttonValue).id);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
