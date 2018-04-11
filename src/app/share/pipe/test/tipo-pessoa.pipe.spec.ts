import { TipoPessoaPipe } from "../tipo-pessoa.pipe";

describe('tipo-pessoa.pipe.ts', () => {

    let tipoPessoaPipe: TipoPessoaPipe = new TipoPessoaPipe();

    it('deveria ser Pessoa Física', () => {
        expect(tipoPessoaPipe.transform('F')).toEqual('Pessoa Física');
    })

    it('deveria ser Pessoa Jurídica', () => {
        expect(tipoPessoaPipe.transform('J')).toEqual('Pessoa Jurídica');
    })
})