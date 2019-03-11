import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpagoequiposComponent } from './viewpagoequipos.component';

describe('ViewpagoequiposComponent', () => {
  let component: ViewpagoequiposComponent;
  let fixture: ComponentFixture<ViewpagoequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpagoequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpagoequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
