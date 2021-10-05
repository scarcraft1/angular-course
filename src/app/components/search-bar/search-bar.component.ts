import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public formValue: any = {
    searchTerm: '',
    selectOption: [],
    radioBtns: '',
    checkbox1Btns: false,
    checkbox2Btns: true,
    checkbox3Btns: false,
  };
  public searchTerm: string = 'cualquier cosa';
  public pattern = new RegExp(/^\d.*$/);

  public selectOption: string = '';
  public radioBtns: string = '';
  public checkbox1Btns: boolean = false;
  public checkbox2Btns: boolean = true;
  public checkbox3Btns: boolean = false;

  public get busqueda() {
    return this.searchTerm;
  }
  public set busqueda(val: string) {
    console.log(val);
    this.searchTerm = val;
  }

  constructor() { }

  public search($event: any) {
    console.log($event);
    console.log(this.formValue);
  }

  ngOnInit(): void {
  }

}
