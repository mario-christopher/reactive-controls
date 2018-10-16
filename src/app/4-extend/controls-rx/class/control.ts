import { ValidatorFn, FormControl } from '@angular/forms';

export enum ControlType {
  CHECKBOX = 'Checkbox',
  DROPDOWN = 'Dropdown',
  GRID = 'Grid',
  RADIOBUTTON = 'Radiobutton',
  TEXTBOX = 'Textbox',
  EXTRA = 'Extra',
}

export interface ControlProperties {
  label: string;
  value: any;
  hint: string;
  errorMessages: { [key: string]: any };
  validators?: ValidatorFn[];
}

export abstract class Control extends FormControl implements ControlProperties {

  readonly controlType: ControlType;

  label: string; value: any;
  hint: string;
  validators?: ValidatorFn[];

  errorMessages: { [key: string]: any; } = {
    required: `This is a required field`,
    maxlength: `You've exceeded the max-length for the field.`
  };

  constructor(properties: Partial<ControlProperties>, controlType: ControlType) {
    super(properties.value, properties.validators);

    this.controlType = controlType;

    this.label = properties.label;
    this.hint = properties.hint;
    this.errorMessages = Object.assign({}, this.errorMessages, properties.errorMessages);
    this.validators = properties.validators;
  }

  clear() { this.patchValue(null); }
}
