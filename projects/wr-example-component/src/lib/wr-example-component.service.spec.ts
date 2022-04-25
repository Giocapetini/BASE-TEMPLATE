import { TestBed } from '@angular/core/testing';

import { WrExampleComponentService } from './wr-example-component.service';

describe('WrExampleComponentService', () => {
  let service: WrExampleComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrExampleComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
