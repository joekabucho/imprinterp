import { TestBed } from '@angular/core/testing';

import { GetprojectsService } from './getprojects.service';

describe('GetprojectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetprojectsService = TestBed.get(GetprojectsService);
    expect(service).toBeTruthy();
  });
});
