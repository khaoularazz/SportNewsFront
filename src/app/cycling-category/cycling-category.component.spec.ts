import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclingCategoryComponent } from './cycling-category.component';

describe('CyclingCategoryComponent', () => {
  let component: CyclingCategoryComponent;
  let fixture: ComponentFixture<CyclingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
