import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Filme } from '../base-data-types/filme';
//Componentes de serviço
import { FilmesService } from '../services/filmes.service';


@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
	@Input() filmes: Filme[];

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
		
	}
	
	getFilmes(): void{
		this.filmesService.getFilmes().subscribe(filmes => this.filmes = filmes);
	}

	getFilme(id: number): void{
		this.filmesService.getFilme(id);
	}

}
