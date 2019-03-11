import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosequipoComponent } from './partidosequipo.component';

describe('PartidosequipoComponent', () => {
  let component: PartidosequipoComponent;
  let fixture: ComponentFixture<PartidosequipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosequipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
