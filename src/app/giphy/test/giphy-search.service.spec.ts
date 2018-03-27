import { GiphySearchService } from '../giphy-search.service';

//Criar um arquivo de teste por cenário.
//Teste sempre vai ter um método describe e pelo menos um méotodo it.
//Na descrição do describe, utiliza-se o nome do arquivo.
//Na descrição do metodo it, coloca-se o detalhamento do que aquele cenário deveria fazer.

//Pode se usar o caracter `f` na frente dos metodos it ou describe para limitar a execução daquele teste ou cenário.
//Caso colocar fdescribe('giphy-search.service.spec.ts', () => {, irão ser executados todos os metodos it dentro do describe.
//Caso for colocado fit('Ao chamar método xyx, deveria retornar 648', () => {, vai ser executado somente aquele it.

//Da mesma forma, pode ser usado o x antes dos metodos. O `x` ignora o teste tanto no metodo it ou no describe.

//ng test --single-run executa e para. Não roda o whatcher, que fica executando a cada alteração.

describe('giphy-search.service.spec.ts', () => {

    //passa uma descricao e um array com os metodos mockados
    const httpMock = jasmine.createSpyObj('Http', ['get']);
    let service: GiphySearchService

    beforeEach(() => {
        //coloca inicializações para todos os testes que estiverem dentro do describe.
        //pode ser usado para sempre criar uma instancia de um objeto, por ex.
        service = new GiphySearchService(httpMock);
    });
 
    it('Teste de explicação, deveria retornar 2', () => {
        //entrada
        let a = 0;
        //processamento
        a = 0 + 2;
        //saida
        expect(a).toBe(2);
    });

    it ('pesquisar, deveria retornar resultado válido', () => {
        service.pesquisar('10', 'happy');
        expect(httpMock.get).toHaveBeenCalled();
        expect(httpMock.get).toHaveBeenCalledWith('https://api.giphy.com/v1/gifs/search?q=happy&api_key=dc6zaTOxFJmzC&limit=10');
    });

    it ('getUrl, deveria retornar url válida', () => {
        const url = service.getUrl('10', 'happy');
        expect(url).toBe('https://api.giphy.com/v1/gifs/search?q=happy&api_key=dc6zaTOxFJmzC&limit=10');
    });
});