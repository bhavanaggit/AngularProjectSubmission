import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplejewlComponent } from './templejewl.component';

describe('TemplejewlComponent', () => {
  let component: TemplejewlComponent;
  let fixture: ComponentFixture<TemplejewlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplejewlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplejewlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
