import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusControllerComponent } from './status-controller.component';

describe('StatusControllerComponent', () => {
  let component: StatusControllerComponent;
  let fixture: ComponentFixture<StatusControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
