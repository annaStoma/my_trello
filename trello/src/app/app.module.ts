import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBoardComponent } from './components/add-board/add-board.component';
import { BoardsListComponent } from './components/boards-list/boards-list.component';
import { BoardComponent } from './components/shared/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBoardComponent,
    BoardsListComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
