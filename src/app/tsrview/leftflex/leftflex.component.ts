import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leftflex',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './leftflex.component.html',
  styleUrl: './leftflex.component.css'
})
export class LeftflexComponent {
  performance = [
    { name: 'CES', value: 1, target:1, points: 1/1, progress: 100}, //rating, performance, cases
    { name: 'FMR Timeline', value: 1, target: 6, points: 8, progress: 50 },
    { name: 'SDR', value: 0, target: 6, points: 4, progress: 50},
    { name: 'vSME Consult Rate', value: 8, target: 8, points: 2, progress: 50 },
    { name: 'Escalation Rate', value:0, target:0, points: 1, progress: 100 },
    {name: "Cases Closed < 5 Days", value: 1, target: 6, points: 7, progress: 75},
    { name: "Quality Score", value:5, target: 5, points: 5, progress: 100},
    { name: "Supportability", value:5, target: 5, points: 5, progress: 100},
   
  ];
  getBarColor(progress: number): string {
    if (progress === 100) return 'green-bar';
    else if (progress >=75) return 'amber-bar';
    else if (progress <= 50) return 'red-bar';
    else return 'default-bar';
  }

  getStarsFromValue(progress: number): number[]{
    let stars;

    if(progress===100)
      stars=5;
    if(progress===75)
      stars=2;
    if(progress<=50)
      stars=1;

    return Array(stars).fill(0);
  }

  missions = [
    { name: 'Total Points with Completion Status', progress: 33, openMissions: 2 }
  ];

}
