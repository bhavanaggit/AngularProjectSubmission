import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaclesComponent } from './nacles.component';

describe('NaclesComponent', () => {
  let component: NaclesComponent;
  let fixture: ComponentFixture<NaclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
