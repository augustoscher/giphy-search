import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-exemplo',
  templateUrl: './ngclass-exemplo.component.html',
  styleUrls: ['./ngclass-exemplo.component.css']
})
export class NgclassExemploComponent implements OnInit {

  flat: boolean = true;
  dark: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
