import { PagenotfoundComponent } from './pagenotfound.component';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pagenotfound.routes';

@NgModule({
  imports: [ShareModule, routing],
  exports: [PagenotfoundComponent],
  declarations: [PagenotfoundComponent]
})
export class PagenotfoundModule { }
