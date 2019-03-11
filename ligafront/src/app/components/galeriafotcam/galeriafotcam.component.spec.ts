import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriafotcamComponent } from './galeriafotcam.component';

describe('GaleriafotcamComponent', () => {
  let component: GaleriafotcamComponent;
  let fixture: ComponentFixture<GaleriafotcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriafotcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriafotcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
