import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsilNet } from './isil-net';

describe('IsilNet', () => {
  let component: IsilNet;
  let fixture: ComponentFixture<IsilNet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsilNet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsilNet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
