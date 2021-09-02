import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { QuizAreaComponent } from './Components/quiz-area/quiz-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuizAreaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
