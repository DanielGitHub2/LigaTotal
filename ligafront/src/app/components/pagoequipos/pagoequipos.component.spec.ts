import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoequiposComponent } from './pagoequipos.component';

describe('PagoequiposComponent', () => {
  let component: PagoequiposComponent;
  let fixture: ComponentFixture<PagoequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
