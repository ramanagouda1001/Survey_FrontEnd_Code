import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewquestionsComponent } from './previewquestions.component';

describe('PreviewquestionsComponent', () => {
  let component: PreviewquestionsComponent;
  let fixture: ComponentFixture<PreviewquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
