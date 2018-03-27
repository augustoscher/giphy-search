import { GiphySearchAutoComponent } from './giphy-search-auto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: GiphySearchAutoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GiphySearchAutoRoutingModule {


}