import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { Option, TravelOptions, SportsOptions, LikeToBeOptions, Person, People, Column, Columns } from 'app/support/model';
import { Form } from 'app/4-extend/controls-rx/class/form';
import { Textbox } from 'app/4-extend/controls-rx/class/textbox';
import { Dropdown } from 'app/4-extend/controls-rx/class/dropdown';
import { Checkbox } from 'app/4-extend/controls-rx/class/checkbox';
import { Radiobutton } from 'app/4-extend/controls-rx/class/radiobutton';
import { Grid } from 'app/4-extend/controls-rx/class/grid';
import { Extra } from 'app/4-extend/controls-rx/class/extra';

@Component({
  selector: 'rc-extend',
  templateUrl: './extend.component.html',
  styleUrls: ['./extend.component.scss']
})
export class ExtendComponent implements OnInit {

  title = 'Extending - Taking basic Controls to the next level.';
  extendForm: Form;

  travelOptions: Option[] = TravelOptions;
  sportsOptions: Option[] = SportsOptions;
  likeToBeOptions: Option[] = LikeToBeOptions;
  people: Person[] = People;
  columns: Column[] = Columns;

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const initData: Person = this.people[2];

    this.extendForm = new Form({
      firstName: new Textbox({
        label: 'First Name',
        hint: 'Enter your first name.',
        value: initData.firstName,
        validators: [Validators.maxLength(25)]
      }),
      lastName: new Textbox({
        label: 'Last Name',
        hint: 'Enter your last name.',
        value: initData.lastName,
        validators: [Validators.required, Validators.maxLength(25)]
      }),
      modeOfTravel: new Dropdown({
        label: 'Mode of Travel',
        hint: 'Select a mode of travel.',
        options: this.travelOptions,
        value: initData.modeOfTravel,
      }),
      sports: new Checkbox({
        label: 'Sports Interests',
        hint: 'Any Sports interests ?',
        options: this.sportsOptions,
        value: initData.sports,
      }),
      likeToBe: new Radiobutton({
        label: `I'd like to be a`,
        hint: 'What would you like to be ?',
        options: this.likeToBeOptions,
        radioGroupName: 'likeToBeRadioGroup',
        value: initData.likeToBe,
        validators: [Validators.required]
      }),
      personSelected: new Grid({
        label: 'List of People',
        hint: 'Select a row to see details.',
        rows: this.people,
        columns: this.columns,
        value: initData,
        onRowClicked: this.onRowClicked,
      }),

      extra_title: new Extra(this.title),
      extra_input1: new Extra('Some @Input() variable'),
      extra_sysVar: new Extra('A system variable'),
    });
  }

  onRowClicked = (person: Person) => {
    this.extendForm.patchValue({
      firstName: person.firstName,
      lastName: person.lastName,
      modeOfTravel: person.modeOfTravel,
      sports: person.sports,
      likeToBe: person.likeToBe,
      personSelected: person,
    });
  }
}
