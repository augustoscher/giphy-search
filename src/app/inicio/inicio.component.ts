import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  dataCriacao: Date = new Date(1988, 3, 15);
  mensagem: string = 'Olá que tal me gusta mama mia';
  youtube: string = 'http://youtube.com.br';

  constructor() { }

  ngOnInit() {
  }

}
