import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxRxComponent } from './checkbox-rx.component';
import { AppModule } from 'app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckboxRxComponent', () => {
  let component: CheckboxRxComponent;
  let fixture: ComponentFixture<CheckboxRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
