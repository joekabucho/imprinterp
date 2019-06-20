import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ProjectBoardsComponent } from './projects/project-boards/project-boards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateProjectComponent,
    ProjectBoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
