import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonRxComponent } from './radiobutton-rx.component';
import { AppModule } from 'app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('RadiobuttonRxComponent', () => {
  let component: RadiobuttonRxComponent;
  let fixture: ComponentFixture<RadiobuttonRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
