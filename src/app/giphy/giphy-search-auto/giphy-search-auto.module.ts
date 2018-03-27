import { GiphySearchAutoRoutingModule } from './giphy-search-auto-routing.module';
import { GiphySearchAutoComponent } from './giphy-search-auto.component';
import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ShareModule, GiphySearchAutoRoutingModule ],
  declarations: [GiphySearchAutoComponent],
  providers: []
})
export class GiphySearchAutoModule { }
