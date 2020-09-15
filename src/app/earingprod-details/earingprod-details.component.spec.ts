import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringprodDetailsComponent } from './earingprod-details.component';

describe('EaringprodDetailsComponent', () => {
  let component: EaringprodDetailsComponent;
  let fixture: ComponentFixture<EaringprodDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaringprodDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaringprodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
