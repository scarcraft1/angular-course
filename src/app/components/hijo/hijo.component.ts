import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input()
  texto: string = '';



  @Output()
  nuevoTexto = new EventEmitter<string>();

  meaningOfLife: number = 42;

  clases = {
    rojo: this.meaningOfLife <= 50,
    amarilo: this.texto === 'hola',
    'input-group': true
  };

  constructor() { }

  enviarTexto(nuevoTextoParam: string): void {
    this.nuevoTexto.emit(nuevoTextoParam);
  }

  ngOnInit(): void {
  }

}
