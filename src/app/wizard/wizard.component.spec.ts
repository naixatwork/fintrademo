import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WizardComponent} from './wizard.component';
import {SharedModule} from "../shared/shared.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('WizardComponent', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [WizardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have #steps that should be initialized on #ngOnInit()", () => {
    const steps = component.steps;

    expect(steps).toBeTruthy();
  })
});
