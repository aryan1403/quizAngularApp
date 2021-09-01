import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizApp';
  quiz: Observable<any>;

  constructor(private quizques : service) {
    this.quiz = this.quizques.getQuiz();
  }

  public isCollapsed = false;
  public toggle = false;
  public toggle2 = false;
  public toggle3 = false;

  toggleColor1(ans:string) {
    let quizQues: any;
    this.quiz.forEach(element => {
      quizQues += element;
    });
    alert(ans);
    if(quizQues===ans)
      this.toggle = !this.toggle;
  }

  toggleColor2() {
    this.toggle2 = !this.toggle2;
  }

  toggleColor3() {
    this.toggle3 = !this.toggle3;
  }

}
