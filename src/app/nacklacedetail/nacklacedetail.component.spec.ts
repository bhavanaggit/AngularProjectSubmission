import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacklacedetailComponent } from './nacklacedetail.component';

describe('NacklacedetailComponent', () => {
  let component: NacklacedetailComponent;
  let fixture: ComponentFixture<NacklacedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacklacedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacklacedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
