import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateControllerComponent } from './date-controller.component';

describe('DateControllerComponent', () => {
  let component: DateControllerComponent;
  let fixture: ComponentFixture<DateControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
