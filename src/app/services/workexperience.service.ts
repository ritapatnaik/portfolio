import { Injectable , inject,PLATFORM_ID} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { WorkExperience } from '../models/work-experience.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private platformId = inject(PLATFORM_ID);
  
  private dataUrl = 'assets/backend_data/workexperience.json';

  constructor(private http: HttpClient) { }

  getWorkExperience(): Observable<WorkExperience[]> {
    // CRITICAL: Check the platform before fetching data
    if (isPlatformBrowser(this.platformId)) {
      // If in the browser, execute the actual HTTP request
      return this.http.get<WorkExperience[]>(this.dataUrl);
    } 
    
    // If NOT in the browser (i.e., during SSR/Prerendering)
    // Return an Observable that immediately completes with an empty array.
    // This prevents the HttpClient from attempting a network call, solving the 404 error.
    console.warn('SSR/Prerendering: Returning empty array for work experience data.');
    return of([]);
  }
}