import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhandmadejwlComponent } from './addhandmadejwl.component';

describe('AddhandmadejwlComponent', () => {
  let component: AddhandmadejwlComponent;
  let fixture: ComponentFixture<AddhandmadejwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhandmadejwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhandmadejwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
