import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BangledetailComponent } from './bangledetail.component';

describe('BangledetailComponent', () => {
  let component: BangledetailComponent;
  let fixture: ComponentFixture<BangledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
