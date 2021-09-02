import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAreaComponent } from './quiz-area.component';

describe('QuizAreaComponent', () => {
  let component: QuizAreaComponent;
  let fixture: ComponentFixture<QuizAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
