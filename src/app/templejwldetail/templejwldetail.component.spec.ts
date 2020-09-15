import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplejwldetailComponent } from './templejwldetail.component';

describe('TemplejwldetailComponent', () => {
  let component: TemplejwldetailComponent;
  let fixture: ComponentFixture<TemplejwldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplejwldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplejwldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
