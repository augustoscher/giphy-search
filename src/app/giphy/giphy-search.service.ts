import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";


@Injectable()
export class GiphySearchService {

    constructor(private _http: Http) {}

    pesquisar(limit: string, term: string) : Observable<Response>{
        const url = this.getUrl(limit, term);
        return this._http.get(url);
    }

    getUrl(limit: string, term: string): string {
        return 'https://api.giphy.com/v1/gifs/search?q='+ term + '&api_key=dc6zaTOxFJmzC&limit=' + limit;
    }
}