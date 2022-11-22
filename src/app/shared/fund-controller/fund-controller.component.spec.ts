import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundControllerComponent } from './fund-controller.component';

describe('FundControllerComponent', () => {
  let component: FundControllerComponent;
  let fixture: ComponentFixture<FundControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
