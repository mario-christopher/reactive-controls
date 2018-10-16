import { ControlProperties, Control, ControlType } from 'app/4-extend/controls-rx/class/control';
import { Column } from 'app/support/model';

export interface GridProperties<T> extends ControlProperties {
  rows: T[];
  columns: Column[];
  value: T;

  onRowClicked: (row: T) => void;
}

export class Grid<T> extends Control implements GridProperties<T> {
  rows: T[];
  columns: Column[];
  value: T;
  onRowClicked: (row: T) => void;

  constructor(properties: Partial<GridProperties<T>> = {}) {
    super(properties, ControlType.GRID);

    this.rows = properties.rows;
    this.columns = properties.columns;
    this.onRowClicked = properties.onRowClicked;
  }
}
