import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjugadoresComponent } from './viewjugadores.component';

describe('ViewjugadoresComponent', () => {
  let component: ViewjugadoresComponent;
  let fixture: ComponentFixture<ViewjugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewjugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
