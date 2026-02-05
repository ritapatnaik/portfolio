import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Project } from '../../models/featured-project.model';
import {FeaturedProjectService} from "../../services/featured-project.service"
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ MatIconModule,CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss'
})
export class FeaturedProjectsComponent {
  projects$! : Observable<Project[]>;

  constructor(private projectservice: FeaturedProjectService) {}

  ngOnInit(): void {
    this.projects$ = this.projectservice.getProject();
  }
}
