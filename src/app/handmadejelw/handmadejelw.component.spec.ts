import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadejelwComponent } from './handmadejelw.component';

describe('HandmadejelwComponent', () => {
  let component: HandmadejelwComponent;
  let fixture: ComponentFixture<HandmadejelwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandmadejelwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandmadejelwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
