import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appContador]',
})
export class ContadorDirective {
  private totalCliks = 0;
  @Input()
  contador: number = 0;

  @Output()
  contadorChange = new EventEmitter<number>();

  @Output()
  classChange = new EventEmitter<string>();

  @HostBinding('class')
  classList = 'red'

  constructor() {}

  @HostListener('click')
  public click(): void {
    this.contador++;
    this.classList += ` class-${this.contador}`;
    this.classChange.emit(this.classList);
    this.contadorChange.emit(this.contador);
  }
}
