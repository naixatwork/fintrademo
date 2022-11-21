import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ImageControllerComponent} from './image-controller.component';
import {SharedModule} from "../shared.module";
import {FormsModule, NgControl, ReactiveFormsModule} from "@angular/forms";

describe('ImageControllerComponent', () => {
  let component: ImageControllerComponent;
  let fixture: ComponentFixture<ImageControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, SharedModule],
      declarations: [ ImageControllerComponent ],
      providers: [NgControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should update #form on #setFileToForm()", () => {
    const mockEvent = {
      currentFiles: [new File([], "test")]
    }

    expect(component.form.value["value"]).withContext("checking if form is empty by default").toBeNull();
    component.setFileToForm(mockEvent);
    expect(component.form.value["value"]).not.toBeNull();
  })

  it("should remove element from #form on #removeFileFromForm()", () => {
    const mockEvent = {
      currentFiles: [new File([], "test")]
    }
    component.form.setValue({value: mockEvent.currentFiles});
    component.removeFileFromForm({file: mockEvent.currentFiles[0]});
    expect(component.form.value["value"]).toEqual([]);
  })
});
