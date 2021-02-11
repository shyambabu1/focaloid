import { TestBed } from '@angular/core/testing';

import { SidebarEventService } from './sidebar-event.service';

describe('SidebarEventService', () => {
  let service: SidebarEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
