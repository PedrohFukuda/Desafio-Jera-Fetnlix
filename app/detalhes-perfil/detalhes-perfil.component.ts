import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Perfil } from '../base-data-types/perfil-dt/perfil';
import { Filme } from '../base-data-types/filme';
//Componentes de serviço
import { ContaService } from '../services/conta.service';
//Componentes de rota
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Conta } from '../base-data-types/conta';
import { FilmesService } from '../services/filmes.service';


@Component({
  selector: 'app-detalhes-perfil',
  templateUrl: './detalhes-perfil.component.html',
  styleUrls: ['./detalhes-perfil.component.css']
})
export class DetalhesPerfilComponent implements OnInit {
	@Input() perfil: Perfil;
	@Input() conta: Conta;
	filmes: Filme[];

  constructor(
		private filmesService: FilmesService,
		private contaService: ContaService,
		private route: ActivatedRoute,
		private location: Location
	) { }

  ngOnInit(): void {
		this.getPerfil();
	}
	
	getPerfil(): void {
		const idConta = +this.route.snapshot.paramMap.get('idConta');
		this.contaService.getConta(idConta).subscribe(conta => this.conta = conta);
		const idPerfil = +this.route.snapshot.paramMap.get('idPerfil');
		this.perfil = this.conta.perfis[idPerfil];
		this.getFilmeByIds(this.perfil.lsFilmesAssistir);
	}

	//GETS
	getFilmeByIds(idFilmes: number[]): void {
		const numeroIds = idFilmes.length;
		if ( 
			(idFilmes === undefined ) ||
			(numeroIds == 0)
		) {
			return;
		}

			this.filmes = [];
		for (let index = 0; index < numeroIds; index++){
			this.filmesService.getFilme(idFilmes[index])
				.subscribe(filme => this.filmes[index] = filme);
		}
	}

	goBack(): void {
		this.location.back();
	}

}
