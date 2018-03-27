import { Giphy } from './../giphy-search-manual/giphy.type';
import { Component, OnInit, Input } from '@angular/core';
import { GiphySearchService } from '../giphy-search.service';

@Component({
  selector: 'app-giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
})
export class GiphySearchListComponent implements OnInit {

  @Input() 
  gifList: Giphy[] = [];

  constructor() { }

  ngOnInit() {
  }


}
