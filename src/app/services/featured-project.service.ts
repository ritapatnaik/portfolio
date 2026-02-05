import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/featured-project.model';
@Injectable({
  providedIn: 'root'
})
export class FeaturedProjectService {

  private dataUrl = 'assets/backend_data/featured-projects.json';

  constructor(private http: HttpClient) { }

  getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.dataUrl);
  }
}
