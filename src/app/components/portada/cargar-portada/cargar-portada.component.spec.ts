import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPortadaComponent } from './cargar-portada.component';

describe('CargarPortadaComponent', () => {
  let component: CargarPortadaComponent;
  let fixture: ComponentFixture<CargarPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPortadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
