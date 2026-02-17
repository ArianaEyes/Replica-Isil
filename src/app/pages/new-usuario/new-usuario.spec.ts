import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsuario } from './new-usuario';

describe('NewUsuario', () => {
  let component: NewUsuario;
  let fixture: ComponentFixture<NewUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
