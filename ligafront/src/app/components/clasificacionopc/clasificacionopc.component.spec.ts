import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionopcComponent } from './clasificacionopc.component';

describe('ClasificacionopcComponent', () => {
  let component: ClasificacionopcComponent;
  let fixture: ComponentFixture<ClasificacionopcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionopcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
