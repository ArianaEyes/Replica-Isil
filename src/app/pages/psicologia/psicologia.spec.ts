import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Psicologia } from './psicologia';

describe('Psicologia', () => {
  let component: Psicologia;
  let fixture: ComponentFixture<Psicologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Psicologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Psicologia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
