import { CapitalizePipe } from './pipe/capitalize.pipe';
import { TipoPessoaPipe } from './pipe/tipo-pessoa.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TipoPessoaPipe, CapitalizePipe],
    exports: [CommonModule, FormsModule, TipoPessoaPipe, CapitalizePipe],
    providers: []
})
export class ShareModule {

}