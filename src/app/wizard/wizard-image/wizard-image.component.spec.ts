import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WizardImageComponent} from './wizard-image.component';
import {SharedModule} from "../../shared/shared.module";
import {FormGroup} from "@angular/forms";

describe('WizardImageComponent', () => {
  let component: WizardImageComponent;
  let fixture: ComponentFixture<WizardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ WizardImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardImageComponent);
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
