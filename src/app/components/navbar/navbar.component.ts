import { Component, inject, signal } from '@angular/core';
import { ThemeStore } from '../../store/themestore';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router'
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [ MatIconModule, MatButtonModule,RouterLink,RouterOutlet,],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    isMobileMenuOpen = signal(false);
    private scroller = inject(ViewportScroller);

    public readonly themeStore = inject(ThemeStore);
    scrollToSection(sectionId: string): void {
     
      this.scroller.scrollToAnchor(sectionId);
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
    }
}


