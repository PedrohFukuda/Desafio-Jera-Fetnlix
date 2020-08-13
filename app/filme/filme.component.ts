import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Filme } from '../base-data-types/filme';
//Componentes de serviço
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {
	@Input() filme: Filme;

  constructor(private filmesService: FilmesService) { }

	ngOnInit(): void {}
	
}
