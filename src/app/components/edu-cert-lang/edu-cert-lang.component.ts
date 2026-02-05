import { Component, inject } from '@angular/core';
import { EduCertLangService } from '../../services/edu-cert-lang.service';



@Component({
  selector: 'app-edu-cert-lang',
  standalone: true,
  imports: [],
  templateUrl: './edu-cert-lang.component.html',
  styleUrl: './edu-cert-lang.component.scss'
})
export class EduCertLangComponent {
  private eduCertLangService = inject(EduCertLangService);

  // 2. Expose signals directly from the service (read-only access)
  education = this.eduCertLangService.education;
  certificates = this.eduCertLangService.certificates;
  languages = this.eduCertLangService.languages;
}