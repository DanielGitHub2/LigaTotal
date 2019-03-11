import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgppalComponent } from './imgppal.component';

describe('ImgppalComponent', () => {
  let component: ImgppalComponent;
  let fixture: ComponentFixture<ImgppalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgppalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgppalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
