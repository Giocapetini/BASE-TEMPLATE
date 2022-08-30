import { Component, OnInit } from '@angular/core';
import { WrExampleComponentService } from './services/wr-example-component.service';

@Component({
  selector: 'wr-example-component',
  templateUrl: './wr-example-component.component.html',
  styleUrls: ['./wr-example-component.component.scss'],
})
export class WrExampleComponentComponent implements OnInit {
  constructor(
    private service: WrExampleComponentService
    ) { }

  ngOnInit(): void {
    this.setServiceOne();
  }

  setServiceOne() {
    this.service.data = 1;
  }
  serviceSetTen(){
    this.service.setDataTEN();
  }
}
