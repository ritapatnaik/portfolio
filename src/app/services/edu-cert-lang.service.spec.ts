import { TestBed } from '@angular/core/testing';

import { EduCertLangService } from './edu-cert-lang.service';

describe('EduCertLangService', () => {
  let service: EduCertLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduCertLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
