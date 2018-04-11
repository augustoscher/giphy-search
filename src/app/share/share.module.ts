import { TipoPessoaPipe } from './pipe/tipo-pessoa.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TipoPessoaPipe],
    exports: [CommonModule, FormsModule, TipoPessoaPipe],
    providers: []
})
export class ShareModule {

}