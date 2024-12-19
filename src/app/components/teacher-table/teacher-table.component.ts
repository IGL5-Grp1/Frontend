import { Component,Input  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this to use Angular directives like NgFor and NgIf
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl } from '@angular/material/paginator';


@Component({
  selector: 'app-teacher-table',
  standalone: true,
  imports: [CommonModule,CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,], // Add CommonModule for Angular directives
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss'] // Corrected plural form
})
export class TeacherTableComponent {
  displayedColumns: string[] = ['select', 'profile', 'department', 'phone', 'faculty', 'actions'];
  dataSource = ELEMENT_DATA;

  editUniversity(university: any) {
    console.log('Edit:', university);
  }

  viewUniversity(university: any) {
    console.log('View:', university);
  }
}
export interface Teacher {
  name: string;
  title: string;
  department: string;
  departmentColor: string; // For tag color
  phone: string;
  faculty: string;
}

const ELEMENT_DATA: Teacher[] = [
  { name: 'Ahmed ben Ahmed', title: 'Maître de conf', department: 'Math', departmentColor: 'green', phone: '29651545', faculty: 'FST' },
  { name: 'Ahmed ben Ahmed', title: 'Professeur', department: 'Informatique', departmentColor: 'orange', phone: '29651545', faculty: 'FST' },
  { name: 'Ahmed ben Ahmed', title: 'Doctorant', department: 'Chemie', departmentColor: 'yellow', phone: '29651545', faculty: 'FST' },
  { name: 'Ahmed ben Ahmed', title: 'Maître assistant', department: 'Biologie', departmentColor: 'blue', phone: '29651545', faculty: 'FST' },
  { name: 'Ahmed ben Ahmed', title: 'Professeur', department: 'Physique', departmentColor: 'red', phone: '29651545', faculty: 'FST' },
  { name: 'Ahmed ben Ahmed', title: 'Professeur', department: 'Droit', departmentColor: 'orange', phone: '29651545', faculty: 'Droit' },
];
