import { Component,Input, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this to use Angular directives like NgFor and NgIf
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SidebarComponent } from '../../../../shared/sidebar/sidebar.component';
import { DepartementService } from '../../services/departement.service';
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
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.scss'],
})
export class ListDepartementsComponent implements OnInit {
  displayedColumns: string[] = ['id_faculte', 'nomDept', 'actions']; // Colonnes de la table
  dataSource = new MatTableDataSource<any>([]); // Données de la table

  constructor(private departmentService: DepartementService) {}

  ngOnInit(): void {
    this.fetchDepartments(); // Récupérer les départements au chargement
  }

  fetchDepartments(): void {
    this.departmentService.getAllDepartments().subscribe({
      next: (departments) => {
        this.dataSource.data = departments;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des départements :', err);
      },
    });
  }

  deleteDepartment(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce département ?')) {
      this.departmentService.deleteDepartment(id).subscribe({
        next: () => {
          alert('Département supprimé avec succès !');
          this.fetchDepartments(); // Recharger les données après suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
        },
      });
    }
  }
}