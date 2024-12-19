import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet, Router} from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examfront';

  constructor(private router: Router) {
  }

  shouldShowSidebar(): boolean {
    return this.router.url !== '/login';
  }
}
