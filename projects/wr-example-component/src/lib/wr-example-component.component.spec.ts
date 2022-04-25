import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrExampleComponentComponent } from './wr-example-component.component';

describe('WrExampleComponentComponent', () => {
  let component: WrExampleComponentComponent;
  let fixture: ComponentFixture<WrExampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrExampleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
