import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownRxComponent } from './dropdown-rx.component';
import { AppModule } from 'app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DropdownRxComponent', () => {
  let component: DropdownRxComponent;
  let fixture: ComponentFixture<DropdownRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
