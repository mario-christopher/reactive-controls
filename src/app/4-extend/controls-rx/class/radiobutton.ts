import { Option } from 'app/support/model';

import { ControlProperties, Control, ControlType } from 'app/4-extend/controls-rx/class/control';

export interface RadiobuttonProperties extends ControlProperties {
  radioGroupName: string;
  options: Option[];
  value: number;
}

export class Radiobutton extends Control implements RadiobuttonProperties {
  radioGroupName: string;
  options: Option[];
  value: number;

  constructor(properties: Partial<RadiobuttonProperties> = {}) {
    super(properties, ControlType.RADIOBUTTON);

    this.radioGroupName = properties.radioGroupName;
    this.options = properties.options;
  }
}
