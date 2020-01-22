import { TestBed } from '@angular/core/testing';

import { NgxListLibService } from './ngx-list-lib.service';

describe('NgxListLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxListLibService = TestBed.get(NgxListLibService);
    expect(service).toBeTruthy();
  });
});
