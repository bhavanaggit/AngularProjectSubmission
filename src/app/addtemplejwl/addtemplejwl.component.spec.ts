import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtemplejwlComponent } from './addtemplejwl.component';

describe('AddtemplejwlComponent', () => {
  let component: AddtemplejwlComponent;
  let fixture: ComponentFixture<AddtemplejwlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtemplejwlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtemplejwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
