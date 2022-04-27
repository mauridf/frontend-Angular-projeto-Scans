import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPublicacoesEditarComponent } from './tipo-publicacoes-editar.component';

describe('TipoPublicacoesEditarComponent', () => {
  let component: TipoPublicacoesEditarComponent;
  let fixture: ComponentFixture<TipoPublicacoesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPublicacoesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPublicacoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
