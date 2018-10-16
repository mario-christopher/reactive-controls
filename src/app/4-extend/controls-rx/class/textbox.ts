import { ControlProperties, Control, ControlType } from 'app/4-extend/controls-rx/class/control';

export type TextType = 'text' | 'password';

export interface TextboxProperties extends ControlProperties {
  type: TextType;
  value: string | number;
}

export class Textbox extends Control implements TextboxProperties {
  type: TextType;
  value: string | number;

  constructor(properties: Partial<TextboxProperties> = {}) {
    super(properties, ControlType.TEXTBOX);

    this.type = properties.type;
  }
}
