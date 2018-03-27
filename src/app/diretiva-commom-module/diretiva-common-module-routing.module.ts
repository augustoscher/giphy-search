import { NgswitchExemploComponent } from './ngswitch-exemplo/ngswitch-exemplo.component';
import { NgclassExemploComponent } from './ngclass-exemplo/ngclass-exemplo.component';
import { NgstyleExemploComponent } from './ngstyle-exemplo/ngstyle-exemplo.component';
import { DiretivaCommomModuleComponent } from './diretiva-commom-module.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: DiretivaCommomModuleComponent},
  {path: 'ngstyle', component: NgstyleExemploComponent},
  {path: 'ngclass', component: NgclassExemploComponent},
  {path: 'ngswitch', component: NgswitchExemploComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class DiretivaCommonModuleRoutingModule { }
