import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnoticiaComponent } from './viewnoticia.component';

describe('ViewnoticiaComponent', () => {
  let component: ViewnoticiaComponent;
  let fixture: ComponentFixture<ViewnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
