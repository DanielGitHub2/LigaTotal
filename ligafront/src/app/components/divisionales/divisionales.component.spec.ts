import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionalesComponent } from './divisionales.component';

describe('DivisionalesComponent', () => {
  let component: DivisionalesComponent;
  let fixture: ComponentFixture<DivisionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
