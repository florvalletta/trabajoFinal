import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAcercaDeComponent } from './eliminar-acerca-de.component';

describe('EliminarAcercaDeComponent', () => {
  let component: EliminarAcercaDeComponent;
  let fixture: ComponentFixture<EliminarAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
