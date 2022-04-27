import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersEquipesEditarComponent } from './pers-equipes-editar.component';

describe('PersEquipesEditarComponent', () => {
  let component: PersEquipesEditarComponent;
  let fixture: ComponentFixture<PersEquipesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersEquipesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersEquipesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
