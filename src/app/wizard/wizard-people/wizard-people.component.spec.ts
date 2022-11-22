import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardPeopleComponent } from './wizard-people.component';

describe('WizardPeopleComponent', () => {
  let component: WizardPeopleComponent;
  let fixture: ComponentFixture<WizardPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizardPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
