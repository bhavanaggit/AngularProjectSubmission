import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaringlistComponent } from './earinglist.component';

describe('EaringlistComponent', () => {
  let component: EaringlistComponent;
  let fixture: ComponentFixture<EaringlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaringlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaringlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
