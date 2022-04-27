import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPublicacoesNovoComponent } from './tipo-publicacoes-novo.component';

describe('TipoPublicacoesNovoComponent', () => {
  let component: TipoPublicacoesNovoComponent;
  let fixture: ComponentFixture<TipoPublicacoesNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPublicacoesNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPublicacoesNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
