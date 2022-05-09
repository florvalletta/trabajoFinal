import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarProyectoComponent } from './cargar-proyecto.component';

describe('CargarProyectoComponent', () => {
  let component: CargarProyectoComponent;
  let fixture: ComponentFixture<CargarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
