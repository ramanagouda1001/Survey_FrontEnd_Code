import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyNamesComponent } from './user-survey-names.component';

describe('UserSurveyNamesComponent', () => {
  let component: UserSurveyNamesComponent;
  let fixture: ComponentFixture<UserSurveyNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveyNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
