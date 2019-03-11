import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugparsComponent } from './jugpars.component';

describe('JugparsComponent', () => {
  let component: JugparsComponent;
  let fixture: ComponentFixture<JugparsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugparsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugparsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
