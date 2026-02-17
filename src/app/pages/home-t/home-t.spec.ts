import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeT } from './home-t';

describe('HomeT', () => {
  let component: HomeT;
  let fixture: ComponentFixture<HomeT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeT]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
