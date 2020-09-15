import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadejwldetailsComponent } from './handmadejwldetails.component';

describe('HandmadejwldetailsComponent', () => {
  let component: HandmadejwldetailsComponent;
  let fixture: ComponentFixture<HandmadejwldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandmadejwldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandmadejwldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
