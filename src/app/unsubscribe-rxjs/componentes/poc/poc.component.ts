import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../../enviar-valor.service';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-poc',
	templateUrl: './poc.component.html'
})
export class PocComponent implements OnInit, OnDestroy {
	nome = 'Componente sem unsubscribe';
	valor: string;

	constructor(private service: EnviarValorService) {}

	ngOnInit() {
		this.service
			.getValor()
			.pipe(tap((v) => console.log(this.nome, v)))
			.subscribe((novoValor) => (this.valor = novoValor));
	}

	ngOnDestroy() {
		console.log(`${this.nome} foi destruido`);
	}
}
