import { TestBed } from '@angular/core/testing';

import { WizardPeopleService } from './wizard-people.service';

describe('WizardPeopleService', () => {
  let service: WizardPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
