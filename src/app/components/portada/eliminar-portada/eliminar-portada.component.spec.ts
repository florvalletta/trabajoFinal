import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPortadaComponent } from './eliminar-portada.component';

describe('EliminarPortadaComponent', () => {
  let component: EliminarPortadaComponent;
  let fixture: ComponentFixture<EliminarPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPortadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
