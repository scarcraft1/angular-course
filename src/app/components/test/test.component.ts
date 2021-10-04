import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  public get inputValue() {
    return this.service.sharedData;
  }
  public set inputValue(val: string) {
    this.service.sendData(val);
  }

  constructor(public service: SharedService) { }

  ngOnInit(): void {}
}
