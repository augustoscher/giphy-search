import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'not-found',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
    //utilizar uma api backend para receber os logs 404 e quantificar etc.
    //jsonorg.com
    console.log('url atual', document.location.href);
    console.log('location', location.href); 
  }

  voltar() {
    this._location.back();
  }

}
