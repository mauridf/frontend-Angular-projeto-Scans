import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPublicacoesDetalheComponent } from './tipo-publicacoes-detalhe.component';

describe('TipoPublicacoesDetalheComponent', () => {
  let component: TipoPublicacoesDetalheComponent;
  let fixture: ComponentFixture<TipoPublicacoesDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPublicacoesDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPublicacoesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
