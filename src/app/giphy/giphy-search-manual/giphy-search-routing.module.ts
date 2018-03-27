import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    //vázio significa raiz... 
    // {path: '', component: GiphySearchManualComponent},
    //ao bater na rota giphy-search-manual do app.routing.module ele cai aqui, e com o `` sabe que vai carregar o GiphySearchManualComponent.
    {path: '', component: GiphySearchManualComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GiphySearchManualComponentRoutingModule {

}