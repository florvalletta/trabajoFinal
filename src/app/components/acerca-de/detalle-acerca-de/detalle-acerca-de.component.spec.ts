import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAcercaDeComponent } from './detalle-acerca-de.component';

describe('DetalleAcercaDeComponent', () => {
  let component: DetalleAcercaDeComponent;
  let fixture: ComponentFixture<DetalleAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
