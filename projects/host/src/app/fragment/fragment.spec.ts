import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fragment } from './fragment';

describe('Fragment', () => {
  let component: Fragment;
  let fixture: ComponentFixture<Fragment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fragment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fragment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
