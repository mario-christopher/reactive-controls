import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxRxComponent } from './textbox-rx.component';
import { AppModule } from 'app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TextboxRxComponent', () => {
  let component: TextboxRxComponent;
  let fixture: ComponentFixture<TextboxRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
