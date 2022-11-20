import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBarComponent } from './main-bar.component';

describe('MainBarComponent', () => {
  let component: MainBarComponent;
  let fixture: ComponentFixture<MainBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a #isWide property", () => {
    const isWide = component.isWide;

    expect(isWide).toBeDefined();
  })

  it("should have a #toggle() that changes the value of #isWide", () => {
    const defaultValue = component.isWide;
    component._toggle();

    expect(component.isWide).not.toBe(defaultValue);
  })
});
