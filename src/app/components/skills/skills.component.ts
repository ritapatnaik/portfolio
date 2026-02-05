// src/app/components/skills/skills.component.ts

import { Component, inject, signal, computed, OnInit,PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule,isPlatformBrowser } from '@angular/common'; 

// Define the types
type SkillCategory = 'frontend' | 'backend' | 'devops';
interface Skill { 
    category: SkillCategory; 
    name: string; 
}
type FilterKey = 'all' | SkillCategory;

@Component({
  selector: 'app-skills',
  standalone: true,
  // Ensure HttpClientModule and CommonModule are imported
  imports: [HttpClientModule, CommonModule], 
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID)

  // Writable signal for ALL skills data
  readonly allSkills = signal<Skill[]>([]); 

  // Writable signal for the active filter
  readonly filter = signal<FilterKey>('all'); 

  // Computed signal for the filtered list of skills
  readonly skills = computed(() => {
    const currentFilter = this.filter();
    const list = this.allSkills();

    if (currentFilter === 'all') {
      return list;
    } else {
      return list.filter(s => s.category === currentFilter);
    }
  });

  // Filter keys for generating the buttons
  readonly filters = [
    { key: 'all' as FilterKey, label: 'All Skills' },
    { key: 'frontend' as FilterKey, label: 'Frontend' },
    { key: 'backend' as FilterKey, label: 'Backend' },
    { key: 'devops' as FilterKey, label: 'DevOps / Cloud' },
  ];

  ngOnInit(): void {
    // CRITICAL: Platform check added here
    if (isPlatformBrowser(this.platformId)) { 
      // Load data from JSON file using HttpClient's .toPromise() (or .pipe(first()).toPromise() in Angular 17+)
      // to populate the signal.
      this.http.get<Skill[]>('assets/backend_data/skills.json').toPromise()
        .then(data => {
          if (data) {
              this.allSkills.set(data); 
          }
        })
        .catch(error => {
          console.error("Error loading skills data:", error);
        });
    }
  }


  setFilter(f: FilterKey) {
    this.filter.set(f);
  }
  
  // Helper function for the skill card badge
  labelFor(cat: SkillCategory): string {
    if (cat === 'frontend') return 'Frontend';
    if (cat === 'backend') return 'Backend';
    return 'DevOps / Cloud';
  }
}