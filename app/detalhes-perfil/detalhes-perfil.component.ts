import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Perfil } from '../base-data-types/perfil-dt/perfil';
//Componentes de serviço
import { ContaService } from '../services/conta.service';
//Componentes de rota
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Conta } from '../base-data-types/conta';


@Component({
  selector: 'app-detalhes-perfil',
  templateUrl: './detalhes-perfil.component.html',
  styleUrls: ['./detalhes-perfil.component.css']
})
export class DetalhesPerfilComponent implements OnInit {
	@Input() perfil: Perfil;
	@Input() conta: Conta;

  constructor(
		private contaService: ContaService,
		private route: ActivatedRoute,
		private location: Location
	) { }

  ngOnInit(): void {
		this.getPerfil();
	}
	
	getPerfil(): void{
		const idConta = +this.route.snapshot.paramMap.get('idConta');
		this.contaService.getConta(idConta).subscribe(conta => this.conta = conta);
		const idPerfil = +this.route.snapshot.paramMap.get('idPerfil');
		this.perfil = this.conta.perfis[idPerfil];
	}

	goBack(): void {
		this.location.back();
	}

}
