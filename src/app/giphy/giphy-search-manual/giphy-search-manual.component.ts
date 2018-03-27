import { GiphySearchService } from './../giphy-search.service';
import { OnInit, Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Giphy } from './giphy.type';

@Component({
    selector: "giphy-search-manual",
    templateUrl: "giphy-search-manual.component.html"
})
export class GiphySearchManualComponent implements OnInit {

    gifs: Giphy[] = [];
    limit: string;
    term: string;

    constructor(protected _title: Title, protected _giphySearchService: GiphySearchService){}

    ngOnInit() {
        this._title.setTitle('1');
    }

    pesquisarGiphy(){
        //metodo subscribe que efetua a chamada http e com isso recebe a resposta.
        //o metodo subscribe recebe uma function como parametro. Nesse caso, estamos passar "response" 
        //como parametro da function
        this._giphySearchService.pesquisar(this.limit, this.term).subscribe(response => {
            this.gifs = response.json().data;
        });

        this._title.setTitle('Pesquisou...');
      }
}