import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Option, TravelOptions, SportsOptions, LikeToBeOptions, Person, People, Column, Columns } from 'app/support/model';

@Component({
  selector: 'rc-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  title = 'Using Fields - Simpler, with all bells and whistles inside a field.';
  fieldsForm: FormGroup;

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

    this.fieldsForm = new FormGroup({
      firstName: new FormControl(initData.firstName, Validators.maxLength(25)),
      lastName: new FormControl(initData.lastName, [Validators.required, Validators.maxLength(25)]),
      modeOfTravel: new FormControl(initData.modeOfTravel),
      sports: new FormControl(initData.sports),
      likeToBe: new FormControl(initData.likeToBe, Validators.required),
      personSelected: new FormControl(initData),
    });
  }

  onRowClicked(person: Person) {
    this.fieldsForm.patchValue({
      firstName: person.firstName,
      lastName: person.lastName,
      modeOfTravel: person.modeOfTravel,
      sports: person.sports,
      likeToBe: person.likeToBe,
      personSelected: person,
    });
  }
}
