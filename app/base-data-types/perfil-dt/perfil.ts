import { Filme } from '../filme';

export interface Perfil {
	id: number;
	nome: string;
	lsFilmesAssistir: number[];
	//lsFilmesAssistidos: Filme[];
}