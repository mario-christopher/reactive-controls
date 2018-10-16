import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Option, TravelOptions, SportsOptions, LikeToBeOptions, Person, People, Column, Columns } from 'app/support/model';

@Component({
  selector: 'rc-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  title = 'Simple Form - With bells and whistles.';
  simpleForm: FormGroup;

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

    this.simpleForm = new FormGroup({
      firstName: new FormControl(initData.firstName, Validators.maxLength(25)),
      lastName: new FormControl(initData.lastName, [Validators.required, Validators.maxLength(25)]),
      modeOfTravel: new FormControl(initData.modeOfTravel),
      sports: new FormArray(
        this.sportsOptions.map(sp => new FormControl(initData.sports.includes(sp.id)))
      ),
      likeToBe: new FormControl(initData.likeToBe, Validators.required),
      personSelected: new FormControl(initData),
    });
  }

  hasError(name: string) {
    return !!this.simpleForm.get(name).errors;
  }

  errMessage(name: string) {
    const errors = this.simpleForm.get(name).errors;
    if (errors) {
      if (errors.hasOwnProperty('required')) {
        return 'This is a required field.';
      }
      if (errors.hasOwnProperty('maxlength')) {
        return 'A max of 25 chars allowed.';
      }
    }
  }

  onRowClicked(person: Person) {
    this.simpleForm.patchValue({
      firstName: person.firstName,
      lastName: person.lastName,
      modeOfTravel: person.modeOfTravel,
      sports: this.sportsOptions.map(so => person.sports.includes(so.id)),
      likeToBe: person.likeToBe,
      personSelected: person,
    });
  }
}
