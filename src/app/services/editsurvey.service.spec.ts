import { TestBed } from '@angular/core/testing';

import { EditsurveyService } from './editsurvey.service';

describe('EditsurveyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditsurveyService = TestBed.get(EditsurveyService);
    expect(service).toBeTruthy();
  });
});
