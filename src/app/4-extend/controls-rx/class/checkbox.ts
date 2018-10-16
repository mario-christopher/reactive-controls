import { Option } from 'app/support/model';

import { ControlProperties, Control, ControlType } from 'app/4-extend/controls-rx/class/control';

export interface CheckboxProperties extends ControlProperties {
  options: Option[];
  value: number[];
}

export class Checkbox extends Control implements CheckboxProperties {
  options: Option[];
  value: number[];

  constructor(properties: Partial<CheckboxProperties> = {}) {
    super(properties, ControlType.CHECKBOX);

    this.options = properties.options;
  }

  clear() { this.patchValue([]); }
}
