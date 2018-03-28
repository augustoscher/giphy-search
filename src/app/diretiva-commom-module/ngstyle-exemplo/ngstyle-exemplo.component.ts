import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-exemplo',
  templateUrl: './ngstyle-exemplo.component.html',
  styleUrls: ['./ngstyle-exemplo.component.css']
})
export class NgstyleExemploComponent implements OnInit {

  flat: boolean = false;
  dark: boolean = false;

  cor: string = 'blue';
  borderStyle: string = '1px solid black';
  alertStyle = {
    'color': 'yellow',
    'font-wheight': 'bold',
    'border-bottom': this.borderStyle
  }

  constructor() { }

  ngOnInit() {
  }

}
