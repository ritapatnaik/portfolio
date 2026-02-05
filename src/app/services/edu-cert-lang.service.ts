import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';


type Education = { degree: string; school: string; year: string; location: string };
type Certificate = { name: string; issuer: string; year: string };
type Language = { name: string; level: string };

type Payload = {
  education: Education[];
  certificates: Certificate[];
  languages: Language[];
};
// Assume Payload and related interfaces are imported/defined here

@Injectable({
  providedIn: 'root'
})
export class EduCertLangService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  // Writable signals to hold the data
  readonly education = signal<Education[]>([]);
  readonly certificates = signal<Certificate[]>([]);
  readonly languages = signal<Language[]>([]);

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    // Platform check performed in the service itself
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<Payload>('assets/backend_data/edu-cert-lang.json').subscribe({
        next: (data) => {
          this.education.set(data.education);
          this.certificates.set(data.certificates);
          this.languages.set(data.languages);
        },
        error: (err) => console.error('Failed to load data:', err)
      });
    }
  }
}