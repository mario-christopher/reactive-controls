import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rc-form-value',
  templateUrl: './form-value.component.html',
  styleUrls: ['./form-value.component.scss']
})
export class FormValueComponent implements OnInit {

  @Input() form: FormGroup;

  get submitted() {
    if (this.form['submitted']) {
      return 'submitted';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
