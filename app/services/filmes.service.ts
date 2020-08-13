import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//Componentes necessarios
import { Filme } from '../base-data-types/filme'
//Mock database
import { FILMES } from '../mock-data/mock-filmes'

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
	filmes: Filme[];
	aux: number;

	constructor() { }
	
	//GETS
	getFilmes(): Observable<Filme[]> {
		return of(FILMES);
	}

	getFilmesByIds(idList: number[]): Observable<Filme[]> {
		this.aux = 0;
		for (let id of idList){
			this.getFilme(id)
				.subscribe(filme => this.filmes[this.aux] = filme);
			if (this.filmes[this.aux] !== undefined)
				this.aux++;
		}
		return of(FILMES);
	}

	getFilme(id: number): Observable<Filme>{
		return of(FILMES.find(filme => filme.id === id));
	}

}
