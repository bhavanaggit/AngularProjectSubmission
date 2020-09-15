import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacklaceDetailsComponent } from './nacklace-details.component';

describe('NacklaceDetailsComponent', () => {
  let component: NacklaceDetailsComponent;
  let fixture: ComponentFixture<NacklaceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacklaceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacklaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
