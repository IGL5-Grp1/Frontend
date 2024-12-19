import { Component } from '@angular/core';
import { Router } from '@angular/router'; // For navigation
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EnseignantService } from '../../services/enseignant.service'; // Import the service

@Component({
  selector: 'app-create-enseignant',
  standalone: true,
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.scss'],
  imports: [
    SidebarComponent,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CreateEnseignantComponent {
  form: FormGroup;

  faculties = [{ id: 1, name: 'FST' }, { id: 2, name: 'ISG' }];
  departments = [
    { id: 1, name: 'Informatique' },
    { id: 2, name: 'Mathématiques' },
  ];
  grades = [
    { id: 1, name: 'Maître de conférences' },
    { id: 2, name: 'Professeur' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private enseignantService: EnseignantService // Inject the service
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cin: ['', [Validators.required]],
      faculty: ['', [Validators.required]],
      department: ['', [Validators.required]],
      grade: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = {
        username: this.form.value.name,
        email: this.form.value.email,
        cin: this.form.value.cin,
        id_departement: this.form.value.department.id,
        id_grade: this.form.value.grade.id,
      };

      this.enseignantService.addEnseignant(formData).subscribe({
        next: (response) => {
          console.log('Enseignant created successfully:', response);
          alert('Enseignant created successfully!');
          this.router.navigate(['/teacher-table']); // Redirect after successful creation
        },
        error: (error) => {
          console.error('Error creating enseignant:', error);
          alert('Failed to create enseignant. Please try again.');
        },
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires');
    }
  }
  goToTeacherTable(): void {
    this.router.navigate(['/teacher-table']);
  }
}