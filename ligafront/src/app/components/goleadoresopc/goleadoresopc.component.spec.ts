import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoleadoresopcComponent } from './goleadoresopc.component';

describe('GoleadoresopcComponent', () => {
  let component: GoleadoresopcComponent;
  let fixture: ComponentFixture<GoleadoresopcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoleadoresopcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoleadoresopcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
