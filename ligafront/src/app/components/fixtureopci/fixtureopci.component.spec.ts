import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureopciComponent } from './fixtureopci.component';

describe('FixtureopciComponent', () => {
  let component: FixtureopciComponent;
  let fixture: ComponentFixture<FixtureopciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtureopciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureopciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
