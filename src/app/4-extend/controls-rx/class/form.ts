import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Control } from 'app/4-extend/controls-rx/class/control';

//  tslint:disable:forin
export class Form extends FormGroup {

  private _controls: { [key: string]: Control };

  private _submitted = false;
  get submitted() { return this._submitted; }

  private _autoSave = false;
  get autoSaving() { return this._autoSave; }

  get now() { return new Date().toTimeString(); }

  subscription: Subscription;

  constructor(controls: { [key: string]: Control }) {
    super(controls);
    this._controls = controls;
  }

  clear() {
    if (this._controls) {
      for (const key in this._controls) {
        this._controls[key].clear();
      }
    }
  }

  submit() {
    this._submitted = true;
  }

  save() {
    console.log(`Saving FormState (${this.now}) :`, this.value);
  }

  autoSaveStart() {
    this._autoSave = true;
    this.subscription = this.valueChanges.subscribe(formValue => this.save());
  }

  autoSaveStop() {
    this._autoSave = false;
    this.cleanUp();
  }

  log(msg: string, data: any) {
    console.log(`${msg} : ${this.now}: `, data);
  }

  cleanUp() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
