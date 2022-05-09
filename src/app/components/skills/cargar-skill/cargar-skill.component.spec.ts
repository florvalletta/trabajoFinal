import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarSkillComponent } from './cargar-skill.component';

describe('CargarSkillComponent', () => {
  let component: CargarSkillComponent;
  let fixture: ComponentFixture<CargarSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
