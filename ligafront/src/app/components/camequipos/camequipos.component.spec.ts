import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamequiposComponent } from './camequipos.component';

describe('CamequiposComponent', () => {
  let component: CamequiposComponent;
  let fixture: ComponentFixture<CamequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
