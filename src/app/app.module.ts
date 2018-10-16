import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { IntroComponent } from './1-intro/intro.component';
import { SimpleComponent } from './2-simple/simple.component';

import { FieldsComponent } from './3-fields/fields.component';
import { TextboxComponent } from './3-fields/controls/textbox/textbox.component';
import { DropdownComponent } from './3-fields/controls/dropdown/dropdown.component';
import { RadiobuttonComponent } from './3-fields/controls/radiobutton/radiobutton.component';
import { CheckboxComponent } from './3-fields/controls/checkbox/checkbox.component';
import { GridComponent } from './3-fields/controls/grid/grid.component';
import { FieldComponent } from './3-fields/controls/field/field.component';

import { ExtendComponent } from './4-extend/extend.component';
import { TextboxRxComponent } from './4-extend/controls-rx/component/textbox-rx/textbox-rx.component';
import { CheckboxRxComponent } from './4-extend/controls-rx/component/checkbox-rx/checkbox-rx.component';
import { RadiobuttonRxComponent } from './4-extend/controls-rx/component/radiobutton-rx/radiobutton-rx.component';
import { DropdownRxComponent } from './4-extend/controls-rx/component/dropdown-rx/dropdown-rx.component';
import { GridRxComponent } from './4-extend/controls-rx/component/grid-rx/grid-rx.component';
import { FieldRxComponent } from './4-extend/controls-rx/component/field-rx/field-rx.component';

import { NextComponent } from './5-next/next.component';
import { SummaryComponent } from './6-summary/summary.component';

import { FormValueComponent } from './support/form-value/form-value.component';
import { HeaderComponent } from './support/header/header.component';

export const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'field', component: FieldsComponent },
  { path: 'extend', component: ExtendComponent },
  { path: 'next', component: NextComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
];

const components = [
  AppComponent,
  FormValueComponent, HeaderComponent,
  IntroComponent,
  SimpleComponent,

  FieldsComponent,
  FieldComponent, TextboxComponent, DropdownComponent, RadiobuttonComponent, CheckboxComponent, GridComponent,

  ExtendComponent,
  FieldRxComponent, TextboxRxComponent, CheckboxRxComponent, RadiobuttonRxComponent, DropdownRxComponent, GridRxComponent,

  NextComponent,
  SummaryComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
