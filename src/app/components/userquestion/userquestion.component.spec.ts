import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserquestionComponent } from './userquestion.component';

describe('UserquestionComponent', () => {
  let component: UserquestionComponent;
  let fixture: ComponentFixture<UserquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
