import { Component, OnInit, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { Grid } from 'app/4-extend/controls-rx/class/grid';
import { ControlRxComponent } from 'app/4-extend/controls-rx/component/control-rx/control-rx.component';

@Component({
  selector: 'rc-grid-rx',
  templateUrl: './grid-rx.component.html',
  styleUrls: ['./grid-rx.component.scss']
})
export class GridRxComponent extends ControlRxComponent implements OnInit {

  formControl: Grid<any>;

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.formControl = this.getControl() as Grid<any>;
  }

}
