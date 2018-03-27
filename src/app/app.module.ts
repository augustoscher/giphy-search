import { HttpModule } from '@angular/http';
import { InicioModule } from './inicio/inicio.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { GiphySearchListModule } from './giphy/giphy-search-list/giphy-search-list.module';
import { GiphySearchComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InicioComponent } from './inicio/inicio.component';
import { GiphySearchAutoModule } from './giphy/giphy-search-auto/giphy-search-auto.module';
import { GiphySearchService } from './giphy/giphy-search.service';
import { DiretivaCommomModuleComponent } from './diretiva-commom-module/diretiva-commom-module.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ 
    BrowserModule, 
    HttpModule,
    InicioModule,
    GiphySearchListModule, 
    // GiphySearchComponentModule, 
    // GiphySearchAutoModule,
    AppRoutingModule, 
    ContatoModule,
    // DiretivaCommomModuleModule,

    //O pagenotfoundmodule deve ser o último. 
    //o angular carrega os modulos sequencialmente. Depois vai carregar o PageNotFoundModule com qqer coisa '**' fazendo ** funcionar.
    PagenotfoundModule
  ],
  providers: [GiphySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
