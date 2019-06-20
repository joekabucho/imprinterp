import { TestBed } from '@angular/core/testing';

import { FetchtasksService } from './fetchtasks.service';

describe('FetchtasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchtasksService = TestBed.get(FetchtasksService);
    expect(service).toBeTruthy();
  });
});
