import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpartidoComponent } from './viewpartido.component';

describe('ViewpartidoComponent', () => {
  let component: ViewpartidoComponent;
  let fixture: ComponentFixture<ViewpartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
