import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPublicacoesComponent } from './tipo-publicacoes.component';

describe('TipoPublicacoesComponent', () => {
  let component: TipoPublicacoesComponent;
  let fixture: ComponentFixture<TipoPublicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPublicacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPublicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
