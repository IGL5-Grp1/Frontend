import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TeacherTableComponent } from "./components/teacher-table/teacher-table.component";

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CreateEnseignantComponent } from "./components/create-enseignant/create-enseignant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examfront';



}
