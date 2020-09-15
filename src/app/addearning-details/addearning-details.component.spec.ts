import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddearningDetailsComponent } from './addearning-details.component';

describe('AddearningDetailsComponent', () => {
  let component: AddearningDetailsComponent;
  let fixture: ComponentFixture<AddearningDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddearningDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddearningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
