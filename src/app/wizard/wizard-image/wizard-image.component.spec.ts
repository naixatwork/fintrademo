import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardImageComponent } from './wizard-image.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('WizardImageComponent', () => {
  let component: WizardImageComponent;
  let fixture: ComponentFixture<WizardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, ReactiveFormsModule, FormsModule],
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
});
