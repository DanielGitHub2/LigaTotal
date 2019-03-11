import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureopcComponent } from './fixtureopc.component';

describe('FixtureopcComponent', () => {
  let component: FixtureopcComponent;
  let fixture: ComponentFixture<FixtureopcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureopcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
