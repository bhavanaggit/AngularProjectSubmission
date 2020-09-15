import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacklacesComponent } from './nacklaces.component';

describe('NacklacesComponent', () => {
  let component: NacklacesComponent;
  let fixture: ComponentFixture<NacklacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacklacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacklacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
