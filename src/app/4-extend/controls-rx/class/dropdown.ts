import { Option } from 'app/support/model';

import { ControlProperties, Control, ControlType } from 'app/4-extend/controls-rx/class/control';

export interface DropdownProperties extends ControlProperties {
  options: Option[];
  value: number;
}

export class Dropdown extends Control implements DropdownProperties {
  options: Option[];
  value: number;

  constructor(properties: Partial<DropdownProperties> = {}) {
    super(properties, ControlType.DROPDOWN);

    this.options = properties.options;
  }
}
