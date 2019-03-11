import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipodatosComponent } from './equipodatos.component';

describe('EquipodatosComponent', () => {
  let component: EquipodatosComponent;
  let fixture: ComponentFixture<EquipodatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipodatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipodatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
