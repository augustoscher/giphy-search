import { NgswitchExemploComponent } from './ngswitch-exemplo/ngswitch-exemplo.component';
import { NgclassExemploComponent } from './ngclass-exemplo/ngclass-exemplo.component';
import { NgstyleExemploComponent } from './ngstyle-exemplo/ngstyle-exemplo.component';
import { DiretivaCommomModuleComponent } from './diretiva-commom-module.component';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { DiretivaCommonModuleRoutingModule } from './diretiva-common-module-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ ShareModule, RouterModule, DiretivaCommonModuleRoutingModule ],
  exports: [DiretivaCommomModuleComponent],
  declarations: [DiretivaCommomModuleComponent, NgstyleExemploComponent, NgclassExemploComponent, NgswitchExemploComponent],
  providers: []
})
export class DiretivaCommomModuleModule { }
