import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowModal]'
})
export class ShowModalDirective {
  public totalClicks: number = 0;

  @Input('appShowModal')
  component: any = true;

  @HostListener('click')
  public log() {
    this.totalClicks++;
    console.log(`Llevo ${this.totalClicks} clicks en el componente ${this.component}`);
  }

  constructor() {  }

}
