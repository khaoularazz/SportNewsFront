import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieteticsComponent } from './dietetics.component';

describe('DieteticsComponent', () => {
  let component: DieteticsComponent;
  let fixture: ComponentFixture<DieteticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieteticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieteticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
