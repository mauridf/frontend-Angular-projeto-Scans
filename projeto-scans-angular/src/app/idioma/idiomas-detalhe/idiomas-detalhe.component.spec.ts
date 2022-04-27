import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasDetalheComponent } from './idiomas-detalhe.component';

describe('IdiomasDetalheComponent', () => {
  let component: IdiomasDetalheComponent;
  let fixture: ComponentFixture<IdiomasDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
