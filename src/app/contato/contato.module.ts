import { ContatoComponentService } from './contato.component.service';
import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ContatoRoutingModule } from './contato-routing.module';


@NgModule({
    imports: [ShareModule, ContatoRoutingModule],
    exports: [ContatoComponent],
    declarations: [ContatoComponent],
    providers: [ContatoComponentService]
})
export class ContatoModule {

}