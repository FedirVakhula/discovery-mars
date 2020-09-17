import { TestBed } from '@angular/core/testing';

import { CommunicationWithNASAService } from './communication-with-nasa.service';

describe('CommunicationWithNASAService', () => {
  let service: CommunicationWithNASAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationWithNASAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
