import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEducacionComponent } from './detalle-educacion.component';

describe('DetalleEducacionComponent', () => {
  let component: DetalleEducacionComponent;
  let fixture: ComponentFixture<DetalleEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
