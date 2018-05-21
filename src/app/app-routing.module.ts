import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
        //Colocar rotas lazy loading
        //passa o path e o caminho absoluto do modulo da pagina, seguido de # pelo nome da classe do modulo
        { path: 'giphy-search-auto', loadChildren: 'app/giphy/giphy-search-auto/giphy-search-auto.module#GiphySearchAutoModule' },
        { path: 'giphy', loadChildren: 'app/giphy/giphy-search-manual/giphy-search-manual.module#GiphySearchComponentModule' },
        { path: 'diretiva-common-module', loadChildren: 'app/diretiva-commom-module/diretiva-commom-module.module#DiretivaCommomModuleModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    declarations: [],
    providers: []
})
export class AppRoutingModule {

}