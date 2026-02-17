import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaPersonal } from './area-personal';

describe('AreaPersonal', () => {
  let component: AreaPersonal;
  let fixture: ComponentFixture<AreaPersonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaPersonal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaPersonal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
