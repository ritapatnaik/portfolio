import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduCertLangComponent } from './edu-cert-lang.component';

describe('EduCertLangComponent', () => {
  let component: EduCertLangComponent;
  let fixture: ComponentFixture<EduCertLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduCertLangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduCertLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
