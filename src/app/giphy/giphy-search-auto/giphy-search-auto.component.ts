import { GiphySearchManualComponent } from './../giphy-search-manual/giphy-search-manual.component';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from '../giphy-search.service';

@Component({
  selector: 'app-giphy-search-auto',
  templateUrl: './giphy-search-auto.component.html',
  styleUrls: ['./giphy-search-auto.component.css']
})
export class GiphySearchAutoComponent extends GiphySearchManualComponent implements OnInit {

    constructor(protected _title: Title, protected _giphySearchService: GiphySearchService) {
      super(_title, _giphySearchService);
    }

    ngOnInit() {
      this._title.setTitle('giphy search auto...')
    }
}
