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

  test('should set data to 10', () => {
    service.setDataTEN();
    expect(service.data).toBe(10);
  })

  test('should set data to not be 9', () => {
    service.setDataTEN();
    expect(service.data).not.toBe(0);
  })

  test('should clear data value of 10 then set to 0', () => {
    service.setDataTEN();
    expect(service.data).toBe(10);
    service.clearData();
    expect(service.data).toBe(0);
  })
});
