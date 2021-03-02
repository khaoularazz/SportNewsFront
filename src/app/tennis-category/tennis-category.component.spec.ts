import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisCategoryComponent } from './tennis-category.component';

describe('TennisCategoryComponent', () => {
  let component: TennisCategoryComponent;
  let fixture: ComponentFixture<TennisCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
