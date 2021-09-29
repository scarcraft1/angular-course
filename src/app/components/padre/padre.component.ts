import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {
  numero: number = 101;
  texto: string = 'hijo no reconocido';

  constructor() { }

  ngOnInit(): void {
  }

}
