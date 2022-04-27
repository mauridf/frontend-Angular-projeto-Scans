import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersEquipesComponent } from './pers-equipes.component';

describe('PersEquipesComponent', () => {
  let component: PersEquipesComponent;
  let fixture: ComponentFixture<PersEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
