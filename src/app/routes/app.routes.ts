import { Routes } from '@angular/router';
import { TeacherTableComponent } from '../features/enseignantFeature/components/teacher-table/teacher-table.component';
import { CreateEnseignantComponent } from '../features/enseignantFeature/components/create-enseignant/create-enseignant.component';
import { LoginComponent } from '../core/authentification/login/login.component';
import { AuthGuard } from '../core/authentification/guard/auth.guard';
import { ListDepartementsComponent } from '../features/departementFeature/components/list-departements/list-departements.component';
import { ListFacultyComponent } from '../features/faculteFeature/components/list-faculty/list-faculty.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'teacher-table', component: TeacherTableComponent, canActivate: [AuthGuard] }, // Protect this route
  { path: 'create-enseignant', component: CreateEnseignantComponent, canActivate: [AuthGuard],   }, // Protect this route
  {path: 'list-departements', component: ListDepartementsComponent, canActivate: [AuthGuard],},
  {path: 'list-faculty', component: ListFacultyComponent, canActivate: [AuthGuard],},


];
