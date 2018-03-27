import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { InicioComponentRoutingModule } from './inicio-routing.module';

@NgModule({
  imports: [ShareModule, InicioComponentRoutingModule],
  exports: [InicioComponent],
  declarations: [InicioComponent]
})
export class InicioModule { }
