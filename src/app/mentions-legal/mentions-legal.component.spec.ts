import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsLegalComponent } from './mentions-legal.component';

describe('MentionsLegalComponent', () => {
  let component: MentionsLegalComponent;
  let fixture: ComponentFixture<MentionsLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionsLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionsLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
