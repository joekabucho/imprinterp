import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { BoardsComponent } from './components/boards/boards.component';
import { TodosComponent } from './components/todos/todos.component';
import { ListsComponent } from './components/lists/lists.component';
import { BoardComponent } from './components/board/board.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { DataService } from './services/data.service';

const appRoutes:Routes=[
  { path: '', component: CreateBoardComponent },
  { path: 'boards/:id',      component: BoardComponent },
  { path: 'boards',      component: BoardsComponent },
  { path: '**',      component: PageNotFoundComponent   }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateBoardComponent,
    BoardsComponent,
    TodosComponent,
    ListsComponent,
    PageNotFoundComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
