import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasNovoComponent } from './idiomas-novo.component';

describe('IdiomasNovoComponent', () => {
  let component: IdiomasNovoComponent;
  let fixture: ComponentFixture<IdiomasNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomasNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomasNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
