import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { quiz } from 'src/app/quiz';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-quiz-area',
  templateUrl: './quiz-area.component.html',
  styleUrls: ['./quiz-area.component.css']
})
export class QuizAreaComponent implements OnInit {

  public questions: quiz[] | undefined;
  constructor(private http: HttpClient) { }
  public toggle = true;
  public counter = 0;

  ngOnInit(): void {
    var url = 'http://localhost:8080/quiz/quizlist';
    this.http.get<any>(url).subscribe(data => {
      this.questions= data;
    });
  }

  flipColor() {
    this.toggle = !this.toggle;
  }

  handleClick(ans: string, myans: string) {
    if(ans === myans) {
      this.counter+=10;
      console.log('Correct Answer');
    }
    else {
      this.flipColor();
      console.log('Wrong Answer');
    }
  }

}
