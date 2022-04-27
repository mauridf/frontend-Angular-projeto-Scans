import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasEditarComponent } from './idiomas-editar.component';

describe('IdiomasEditarComponent', () => {
  let component: IdiomasEditarComponent;
  let fixture: ComponentFixture<IdiomasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
