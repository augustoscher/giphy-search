import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-exemplo',
  templateUrl: './ngswitch-exemplo.component.html',
  styleUrls: ['./ngswitch-exemplo.component.css']
})
export class NgswitchExemploComponent implements OnInit {

  formatacao: string;

  constructor() { }

  ngOnInit() {
  }

  setFormatacao(param: any) {
    this.formatacao = param;
  }

}
