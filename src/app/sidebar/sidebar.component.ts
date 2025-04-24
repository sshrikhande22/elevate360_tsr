import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  user = {
    name: 'Aayush Goyal',
    role: 'AI/ML',
    imageUrl: 'tsrpfp.jpg' // replace with real URL when required
  };
}
