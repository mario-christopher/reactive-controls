import { Component, OnInit, Self, Optional, Input, EventEmitter, Output } from '@angular/core';
import { ControlComponent } from '../control/control.component';
import { NgControl } from '@angular/forms';

import { Column } from 'app/support/model';

@Component({
  selector: 'rc-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent extends ControlComponent implements OnInit {

  @Input() rows: any[] = [];
  @Input() columns: Column[] = [];
  @Output() rowClicked: EventEmitter<any> = new EventEmitter(null);

  constructor(
    @Self()
    @Optional()
    ngControl: NgControl,
  ) {
    super(ngControl);
  }

  ngOnInit() {
    this.formControl = this.getControl();
  }

}
