import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarEducacionComponent } from './cargar-educacion.component';

describe('CargarEducacionComponent', () => {
  let component: CargarEducacionComponent;
  let fixture: ComponentFixture<CargarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
