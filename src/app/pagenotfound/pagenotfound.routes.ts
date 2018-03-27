import { PagenotfoundComponent } from './pagenotfound.component';
import { Observable } from 'rxjs/Observable';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
    //esses dois asteriscos significam o 404
    {path: "**", component: PagenotfoundComponent}
];

//esta fomra de configuração e uma forma valida, mas não é comum. evitar. mas funciona.
//não está na convenção.
export const routing: ModuleWithProviders = RouterModule.forChild(routes);