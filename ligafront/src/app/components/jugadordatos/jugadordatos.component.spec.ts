import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadordatosComponent } from './jugadordatos.component';

describe('JugadordatosComponent', () => {
  let component: JugadordatosComponent;
  let fixture: ComponentFixture<JugadordatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadordatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadordatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
