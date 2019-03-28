import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviarValorService } from '../../enviar-valor.service';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-poc-async',
	templateUrl: './poc-async.component.html'
})
export class PocAsyncComponent implements OnInit, OnDestroy {
	nome = 'Componente com async';
	valor$: Observable<string>;

	constructor(private service: EnviarValorService) {}

	ngOnInit() {
		this.valor$ = this.service.getValor().pipe(tap((v) => console.log(this.nome, v)));
	}

	ngOnDestroy() {
		console.log(`${this.nome} foi destruido`);
	}
}
