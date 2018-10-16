import { Control, ControlType } from 'app/4-extend/controls-rx/class/control';

export class Extra extends Control {
  constructor(value?: any) {
    super({ value }, ControlType.EXTRA);
  }
}
