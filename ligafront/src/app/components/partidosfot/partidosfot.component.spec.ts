import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidosfotComponent } from './partidosfot.component';

describe('PartidosfotComponent', () => {
  let component: PartidosfotComponent;
  let fixture: ComponentFixture<PartidosfotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidosfotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosfotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
