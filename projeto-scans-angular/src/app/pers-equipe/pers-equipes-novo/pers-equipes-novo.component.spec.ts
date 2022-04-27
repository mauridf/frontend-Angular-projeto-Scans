import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersEquipesNovoComponent } from './pers-equipes-novo.component';

describe('PersEquipesNovoComponent', () => {
  let component: PersEquipesNovoComponent;
  let fixture: ComponentFixture<PersEquipesNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersEquipesNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersEquipesNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
