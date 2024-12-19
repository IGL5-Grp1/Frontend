import { Routes } from '@angular/router';
import { TeacherTableComponent } from './components/teacher-table/teacher-table.component';
import { CreateEnseignantComponent } from './components/create-enseignant/create-enseignant.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/login/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'teacher-table', component: TeacherTableComponent, canActivate: [AuthGuard] }, // Protect this route
  { path: 'create-enseignant', component: CreateEnseignantComponent, canActivate: [AuthGuard] }, // Protect this route
];
