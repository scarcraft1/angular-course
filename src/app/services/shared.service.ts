import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public sharedData: string = 'Esto es algo en el servicio';

  constructor() { }

  public sendData(data: string) {
    this.sharedData = data;
  }
}
