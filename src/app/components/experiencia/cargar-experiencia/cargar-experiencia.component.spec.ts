import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarExperienciaComponent } from './cargar-experiencia.component';

describe('CargarExperienciaComponent', () => {
  let component: CargarExperienciaComponent;
  let fixture: ComponentFixture<CargarExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
