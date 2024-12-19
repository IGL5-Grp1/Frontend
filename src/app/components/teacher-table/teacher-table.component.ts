import { Component,Input, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this to use Angular directives like NgFor and NgIf
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EnseignantService } from '../../services/enseignant.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-teacher-table',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SidebarComponent
  ],
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss'],
})
export class TeacherTableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'profile', 'department', 'cin', 'faculty', 'actions'];
  dataSource: any[] = []; // Will hold data fetched from API

  constructor(private enseignantService: EnseignantService) {}

  ngOnInit(): void {
    this.fetchTeachers();
  }

  fetchTeachers(): void {
    this.enseignantService.getAllEnseignants().subscribe({
      next: (data) => {
        // Transform API data to match the table structure
        this.dataSource = data.map((teacher: any) => ({
          name: teacher.username,
          title: teacher.grade.nomGrade,
          department: teacher.departement.nomDept,
          departmentColor: this.getDepartmentColor(teacher.departement.nomDept),
          cin: teacher.cin,
          faculty: teacher.departement.faculte.nomFaculte,
        }));
      },
      error: (err) => {
        console.error('Error fetching enseignants:', err);
      },
    });
  }

  getDepartmentColor(department: string): string {
    // Example logic for assigning colors to departments
    switch (department) {
      case 'Computer Science':
        return 'green';
      case 'Math':
        return 'orange';
      case 'Biology':
        return 'blue';
      case 'Physics':
        return 'red';
      case 'Law':
        return 'yellow';
      default:
        return 'gray';
    }
  }
}