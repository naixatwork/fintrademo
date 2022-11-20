import { TestBed } from '@angular/core/testing';

import { MainBarTitleService } from './main-bar-title.service';
import {BehaviorSubject} from "rxjs";

describe('MainBarTitleService', () => {
  let service: MainBarTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBarTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should have a #mainBarTitle subject", () => {
    const title$ = service.mainBarTitle;

    expect(title$).toBeTruthy();
    expect(title$).toBeInstanceOf(BehaviorSubject);
  })
});
