import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ProjectBoardsComponent } from './projects/project-boards/project-boards.component';
import { ProjectTasksComponent } from './projects/project-tasks/project-tasks.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from "ng-sidebar";
import { DevTeamComponent } from './teams/dev-team/dev-team.component';
import { SocialmediaTeamComponent } from './teams/socialmedia-team/socialmedia-team.component';
import { BusinessdevelopmentTeamComponent } from './teams/businessdevelopment-team/businessdevelopment-team.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateProjectComponent,
    ProjectBoardsComponent,
    ProjectTasksComponent,
    SidebarComponent,
    DevTeamComponent,
    SocialmediaTeamComponent,
    BusinessdevelopmentTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
