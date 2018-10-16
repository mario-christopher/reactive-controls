import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { Option, TravelOptions, SportsOptions, LikeToBeOptions, Person, People, Column, Columns } from 'app/support/model';

@Component({
  selector: 'rc-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  title = 'Introduction - Plain and simple controls';
  introForm: FormGroup;

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

    this.introForm = new FormGroup({
      firstName: new FormControl(initData.firstName), //  Textbox
      lastName: new FormControl(initData.lastName), //  Textbox
      modeOfTravel: new FormControl(initData.modeOfTravel), //  Dropdown
      sports: new FormArray(  //  Checkboxes
        this.sportsOptions.map(sp => new FormControl(initData.sports.includes(sp.id)))
      ),
      likeToBe: new FormControl(initData.likeToBe), //  Radiobuttons
      personSelected: new FormControl(initData),  //  Grid
    });
  }

  onRowClicked(person: Person) {
    this.introForm.patchValue({
      firstName: person.firstName,
      lastName: person.lastName,
      modeOfTravel: person.modeOfTravel,
      sports: this.sportsOptions.map(so => person.sports.includes(so.id)),
      likeToBe: person.likeToBe,
      personSelected: person,
    });
  }
}
