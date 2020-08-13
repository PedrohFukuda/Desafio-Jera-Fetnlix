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
	filmes: Observable<Filme[]>;

	constructor() { }
	
	getFilmes(): Observable<Filme[]> {
		return of(FILMES);
	}

	getFilme(id: number): Observable<Filme>{
		return of(FILMES.find(filme => filme.id === id));
	}

}
