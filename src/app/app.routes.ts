import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TeacherTableComponent} from "./components/teacher-table/teacher-table.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'teacher-table', component: TeacherTableComponent}
];
