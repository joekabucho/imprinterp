import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectBoardsComponent} from "./projects/project-boards/project-boards.component";
import {LoginComponent} from "./login/login.component";
import {CreateProjectComponent} from "./projects/create-project/create-project.component";
import {ProjectTasksComponent} from "./projects/project-tasks/project-tasks.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'projects', component: ProjectBoardsComponent},
  {path: 'create-project', component: CreateProjectComponent},
  {path: 'teams', component: ProjectTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
