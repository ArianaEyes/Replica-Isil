import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosT } from './cursos-t';

describe('CursosT', () => {
  let component: CursosT;
  let fixture: ComponentFixture<CursosT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosT]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
