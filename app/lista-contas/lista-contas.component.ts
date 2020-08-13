import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Conta } from '../base-data-types/conta';
//Componentes de serviço
import { ContaService } from '../services/conta.service';


@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.css']
})
export class ListaContasComponent implements OnInit {
	 contas: Conta[];

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
		this.getContas();
	}

	getConta(id: number): void{
		this.contaService.getConta(id);
	}

	getContas(): void{
		this.contaService.getContas()
		.subscribe(contas => this.contas = contas);
		console.log(this.contas);
	}

}
