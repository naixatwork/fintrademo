import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountControllerComponent } from './amount-controller.component';

describe('AmountControllerComponent', () => {
  let component: AmountControllerComponent;
  let fixture: ComponentFixture<AmountControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
