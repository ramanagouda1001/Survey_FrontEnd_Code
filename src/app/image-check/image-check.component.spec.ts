import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCheckComponent } from './image-check.component';

describe('ImageCheckComponent', () => {
  let component: ImageCheckComponent;
  let fixture: ComponentFixture<ImageCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
