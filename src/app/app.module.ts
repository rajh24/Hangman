import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonBoardComponent } from './button-board/button-board.component';
import { WordDisplayComponent } from './word-display/word-display.component';
import { ScoreBoardComponent } from './score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonBoardComponent,
    WordDisplayComponent,
    ScoreBoardComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
