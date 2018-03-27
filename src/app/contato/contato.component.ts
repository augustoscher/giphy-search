import { ContatoComponentService } from './contato.component.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private _service: ContatoComponentService) { }

  ngOnInit() {
  }

  enviarContato(contatoForm: NgForm){
    console.log('inicio');
    this._service.enviarContato(contatoForm.value).subscribe((response) => {
      console.log(response);
      console.log('fim');
    })
  }

}
