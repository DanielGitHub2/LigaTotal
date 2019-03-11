import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugcarnetComponent } from './jugcarnet.component';

describe('JugcarnetComponent', () => {
  let component: JugcarnetComponent;
  let fixture: ComponentFixture<JugcarnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugcarnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugcarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
