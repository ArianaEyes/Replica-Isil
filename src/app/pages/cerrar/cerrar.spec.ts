import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cerrar } from './cerrar';

describe('Cerrar', () => {
  let component: Cerrar;
  let fixture: ComponentFixture<Cerrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cerrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cerrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
