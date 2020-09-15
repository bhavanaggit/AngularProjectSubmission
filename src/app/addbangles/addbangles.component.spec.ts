import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbanglesComponent } from './addbangles.component';

describe('AddbanglesComponent', () => {
  let component: AddbanglesComponent;
  let fixture: ComponentFixture<AddbanglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbanglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbanglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
