import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tipopessoa'
})
export class TipoPessoaPipe implements PipeTransform {
    transform(tipo: string) : string {
        if ('F' === tipo) {
            return 'Pessoa Física';
        }
        if ('J' === tipo){
            return 'Pessoa Jurídica';
        }
        return '';
    }
}
