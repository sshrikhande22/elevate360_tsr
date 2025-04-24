import { Component, Input } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);
@Component({
  selector: 'app-rightflex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rightflex.component.html',
  styleUrl: './rightflex.component.css'
})
export class RightflexComponent  {

  @Input() title = 'Better Together';
  @Input() progress = 59.91;
  @Input() target = 100;
  @Input() daysLeft = 1;
  @Input() totalChallenges = 4;

  @Input() myRank = 4;
  @Input() totalMembers = 10;

  // Top 3 users data 
  podium = [
    { rank: 2, name: 'User B', image: 'user2.jpg' },
    { rank: 1, name: 'User A', image: 'sanjay.jpg' },
    { rank: 3, name: 'User C', image: 'user3.jpg' }
  ];

  @Input() badgesCount = 15;

  badges = [
    { image: 'user2.jpg', label: 'Parthasarathy' },
    { image: 'user3.jpg', label: 'Sowmya' },
    { image: 'sanjay.jpg', label: 'Sanjay' }
  ];

}
