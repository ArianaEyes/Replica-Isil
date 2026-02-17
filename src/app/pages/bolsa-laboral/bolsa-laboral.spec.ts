import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaLaboral } from './bolsa-laboral';

describe('BolsaLaboral', () => {
  let component: BolsaLaboral;
  let fixture: ComponentFixture<BolsaLaboral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsaLaboral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolsaLaboral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
