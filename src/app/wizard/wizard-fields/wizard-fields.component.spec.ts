import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WizardFieldsComponent} from './wizard-fields.component';
import {FormGroup} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

describe('WizardFieldsComponent', () => {
  let component: WizardFieldsComponent;
  let fixture: ComponentFixture<WizardFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ WizardFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should initialize #form in #constructor()", () => {
    const form = component.form;

    expect(form).toBeTruthy();
    expect(form).toBeInstanceOf(FormGroup);
  });
});
