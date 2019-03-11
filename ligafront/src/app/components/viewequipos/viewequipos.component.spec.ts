import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewequiposComponent } from './viewequipos.component';

describe('ViewequiposComponent', () => {
  let component: ViewequiposComponent;
  let fixture: ComponentFixture<ViewequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
