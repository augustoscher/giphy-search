import { Fixed } from './../../giphy-search-manual/giphy.type';
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ShareModule } from "../../../share/share.module";
import { GiphySearchListComponent } from "../giphy-search-list.component";
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('giphy-search-list.component.spec.ts', () => {

    let fixture: ComponentFixture<GiphySearchListComponent>;
    let giphyComponent: GiphySearchListComponent;

    beforeEach(async(() =>{
        TestBed.configureTestingModule({
            //recebe um objeto com os decorators do modulo do 
            //componente que for testado. Nesse caso, GiphySearchListModule.
            //Remove-se o exports.
            imports: [ ShareModule ],
            declarations: [ GiphySearchListComponent]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(GiphySearchListComponent);
            giphyComponent = fixture.componentInstance;
             //dispara o sistema de detecção de mudanças, passa por todos os ciclos que precisam ser refletidas dentro do html.
            fixture.detectChanges();
        });
    }));

    it('Deveria ter criado o component GiphySearchListComponent', () => {
        expect(giphyComponent).toBeTruthy();
        expect(giphyComponent).not.toBeNull();
    });

    //Simular a passagem de parâmetro para o component 
    //<app-giphy-search-list [gifList]="gifs"></app-giphy-search-list>
    //e o próprio angular renderize o html do componente.
    it ('Deveria ter dois elementos <a> na renderizção do componente GiphySearchListComponent', () => {
        giphyComponent.gifList = [
            {
                id: '1',
                url: 'localhost', 
                images: { fixed_height: { url: 'localhost/01.gif' } } 
            },
            {
                id: '2',
                url: 'localhost:8080', 
                images: { fixed_height: { url: 'localhost/01.gif' } } 
            }
        ];
        //permite pesquisar a existencia de determinada tag no html
        //css não signifca que vá pegar um elemento de css do style. Vai pegar de um seletor, pode ser um classe css ou uma tag direto.    
        //retorna um array de debugElement
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            //dependendo da qtd de elementos, pode demorar o carregamento da pagina.
            //Por isso o expected() deve estar dentro do whenStable().
            
            //O problema de fazer isso dentro do whenStable é que pode acontecer de já estar executando o próximo cenário,
            //e pode ser que o cenário quebre, mas o runner vai dizer que na contabilização de testes, ele passou.
            //Porém os logs irão dizer que um teste quebrou. Isso acontece quando há uma demora no whenStable().

            //Nesses casos, deve-se usar o método fake_async no beforeEach()
            //Isso faz com que deixamos de utilizar o whenStable() e detectChanges() e passamos a usar o metodo tick();
            const debugElement: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
            expect(debugElement.length).toBe(2);
        });
    });
});