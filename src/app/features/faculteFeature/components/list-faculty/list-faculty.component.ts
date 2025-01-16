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
import { SidebarComponent } from '../../../../shared/sidebar/sidebar.component';
import { FacultyService } from '../../services/faculty.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-list-faculty',
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
  templateUrl: './list-faculty.component.html',
  styleUrl: './list-faculty.component.scss'
})
export class ListFacultyComponent {
displayedColumns: string[] = [ 'nomFaculte', 'university', 'actions'];
  dataSource: any[] = []; // Will hold data fetched from API

  constructor(private facultyService: FacultyService) {}

  ngOnInit(): void {
    this.fetchTeachers();
  }

  fetchTeachers(): void {
    this.facultyService.getAllFaculties().subscribe({
      next: (data) => {
        // Transform API data to match the table structure
        this.dataSource = data.map((faculty: any) => ({
          nomFaculte: faculty.nomFaculte,
          university: faculty.id_universite,
          }));
      },
      error: (err) => {
        console.error('Error fetching enseignants:', err);
      },
    });
  }

  
}
