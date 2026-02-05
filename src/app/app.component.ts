import { Component, effect, HostBinding, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ThemeStore } from './store/themestore';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { isPlatformBrowser } from '@angular/common';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component'; 
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EduCertLangComponent } from './components/edu-cert-lang/edu-cert-lang.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutCardComponent, AboutSectionComponent, WorkExperienceComponent,FeaturedProjectsComponent,SkillsComponent,EduCertLangComponent,FooterComponent,GetInTouchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  private readonly themeStore = inject(ThemeStore);
  private readonly platformId = inject(PLATFORM_ID);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const isDarkMode = this.themeStore.isDarkMode();
        document.body.classList.toggle('dark', isDarkMode);
      });
    }
  }
}
