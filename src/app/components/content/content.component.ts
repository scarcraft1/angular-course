import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title = 'Content Component';

  private otro = 'asjhdgjahsg';

  constructor() { }

  ngOnInit(): void {
  }

}
