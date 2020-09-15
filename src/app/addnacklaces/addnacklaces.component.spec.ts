import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnacklacesComponent } from './addnacklaces.component';

describe('AddnacklacesComponent', () => {
  let component: AddnacklacesComponent;
  let fixture: ComponentFixture<AddnacklacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnacklacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnacklacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
