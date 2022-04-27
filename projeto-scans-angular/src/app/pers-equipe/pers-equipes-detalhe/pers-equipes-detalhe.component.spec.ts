import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersEquipesDetalheComponent } from './pers-equipes-detalhe.component';

describe('PersEquipesDetalheComponent', () => {
  let component: PersEquipesDetalheComponent;
  let fixture: ComponentFixture<PersEquipesDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersEquipesDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersEquipesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
