import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HIGHLIGHTS, STATS, Highlight, Stat } from '../../backend_data/about.data';
import { NgClass } from '@angular/common'; 

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  highlights: Highlight[] = HIGHLIGHTS;
  stats: Stat[] = STATS;

 
}
