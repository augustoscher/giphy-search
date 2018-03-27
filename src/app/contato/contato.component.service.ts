import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";

const host = 'http://dbapi.io/db/coll';
//Para consultar a requisição: http://dbapi.io/browser/#/db/coll

@Injectable()
export class ContatoComponentService {

    constructor(private _http: Http){
    }

    enviarContato(contatoForm: any)  {
        let nomeCompleto = contatoForm.nomeCompleto;
        let email = contatoForm.contato.email;
        let mensagem = contatoForm.contato.email;

        return this._http.post(host, {email: email, from: nomeCompleto, message: mensagem});
    }
}