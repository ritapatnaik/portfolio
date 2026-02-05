
import { Component, signal, OnDestroy, OnInit, Inject, NgZone , PLATFORM_ID, inject} from '@angular/core';
import {  isPlatformBrowser, ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-about-card',
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent implements OnInit, OnDestroy {
  name = 'Sahil Nair';
  titlePrefix = 'I am a';
  roles = ['Software Developer', 'DevOps Engineer', 'Full Stack Developer', 'FrontEnd Engineer'];
  private scroller = inject(ViewportScroller);
 

  displayed = signal<string>('');   // typed text
  private i = 0;                    // role index
  private typingId: any;            // timer ref
  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly zone: NgZone
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;        // guard SSR
    this.zone.runOutsideAngular(() => this.startCycle());   // avoid SSR/zone churn
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingId);
  }

  private startCycle() {
    const cycle = async () => {
      const text = this.roles[this.i % this.roles.length];
      await this.type(text, 55);     // type speed
      await this.sleep(800);         // hold
      await this.erase(28);          // erase speed
      await this.sleep(200);         // small gap
      this.i++;
      this.typingId = setTimeout(cycle, 200); // keep looping
    };
    cycle();
  }

  private async type(text: string, speed = 60) {
    for (let k = 1; k <= text.length; k++) {
      this.displayed.set(text.slice(0, k));
      await this.sleep(speed);
    }
  }

  private async erase(speed = 35) {
    const text = this.displayed();
    for (let k = text.length - 1; k >= 0; k--) {
      this.displayed.set(text.slice(0, k));
      await this.sleep(speed);
    }
  }

  private sleep(ms: number) {
    return new Promise<void>(r => setTimeout(r, ms));
  }

  scrollToSection(sectionId: string): void {
     
    this.scroller.scrollToAnchor(sectionId);
  }
}
