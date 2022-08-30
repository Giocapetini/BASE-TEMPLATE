import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrExampleComponentService } from './services/wr-example-component.service';

import { WrExampleComponentComponent } from './wr-example-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WrExampleComponentComponent', () => {
  let component: WrExampleComponentComponent;
  let service: WrExampleComponentService;
  let http: HttpClientTestingModule;
  let fixture: ComponentFixture<WrExampleComponentComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrExampleComponentComponent],
      imports: [HttpClientTestingModule],
      providers: [WrExampleComponentService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrExampleComponentComponent);
    service = TestBed.inject(WrExampleComponentService);
    component = fixture.componentInstance;
    // service.clearData();
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should call set data to 1', () => {
    component.setServiceOne();
    expect(service.data).toBe(1);
    expect(Object.is(service.data, 1)).toBe(true);
  });

  test('should set data to 10', () => {
    component.serviceSetTen();
    expect(service.data).toBe(10);
  });

  test('should set to 10 by passing in data to setValue', () => {
    const newData = jest.fn();
    service.setValue(newData, 10);
    expect(service.data).toBe(10);
    expect(newData).toHaveBeenCalled();
  });

  test('should set to 2 by passing in data to setValue and not be called', () => {
    const newData = jest.fn();
    service.setValue(newData, 2);
    expect(newData).not.toHaveBeenCalled();
  });

  test('spyOn setDataTen and expect to be 10', () => {
    const spy = jest.spyOn(service, 'setDataTEN');
    component.serviceSetTen();
    expect(spy).toHaveBeenCalled();
    expect(service.data).toBe(10);
  });

  // test('This test should fail', () => {
  //   const newData = jest.fn();
  //   service.setValue(newData, 2);
  //   expect(newData).toHaveBeenCalled();
  // });




});
