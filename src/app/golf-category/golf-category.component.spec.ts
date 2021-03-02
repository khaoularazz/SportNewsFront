import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCategoryComponent } from './golf-category.component';

describe('GolfCategoryComponent', () => {
  let component: GolfCategoryComponent;
  let fixture: ComponentFixture<GolfCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
