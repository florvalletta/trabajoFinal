import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarAcercaDeComponent } from './cargar-acerca-de.component';

describe('CargarAcercaDeComponent', () => {
  let component: CargarAcercaDeComponent;
  let fixture: ComponentFixture<CargarAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
