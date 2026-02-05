import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../../services/workexperience.service';
import { WorkExperience } from '../../models/work-experience.model';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  standalone: true,
  imports: [CommonModule, AsyncPipe]
})
export class WorkExperienceComponent implements OnInit {
  workExperiences$!: Observable<WorkExperience[]>;

  constructor(private workExperienceService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workExperiences$ = this.workExperienceService.getWorkExperience();
  }
}