import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballCategoryComponent } from './football-category.component';

describe('FootballCategoryComponent', () => {
  let component: FootballCategoryComponent;
  let fixture: ComponentFixture<FootballCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
