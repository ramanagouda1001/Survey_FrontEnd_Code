import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyNameComponent } from './survey-name.component';

describe('SurveyNameComponent', () => {
  let component: SurveyNameComponent;
  let fixture: ComponentFixture<SurveyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
