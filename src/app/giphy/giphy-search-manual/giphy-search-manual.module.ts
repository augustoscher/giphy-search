import { Giphy } from './giphy.type';
import { ShareModule } from './../../share/share.module';
import { GiphySearchService } from './../giphy-search.service';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';
import { GiphySearchManualComponentRoutingModule } from './giphy-search-routing.module';

@NgModule({
   imports: [ HttpModule, ShareModule, GiphySearchListModule, GiphySearchManualComponentRoutingModule],
   exports: [ GiphySearchManualComponent ],
   declarations: [ GiphySearchManualComponent ],
   providers: [ GiphySearchService ]
})
export class GiphySearchComponentModule {

}