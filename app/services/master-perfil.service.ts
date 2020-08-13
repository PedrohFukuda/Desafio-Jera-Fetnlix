import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//Componentes necessarios
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil';
//Componentes de banco de dados
import { MASTER } from '../mock-data/mock-masterPerfilA'

@Injectable({
  providedIn: 'root'
})
export class MasterPerfilService {

	constructor() { }

	getPerfis(): Observable<MasterPerfil[]> {
		return of(MASTER);
	}

	getPerfil(id: number): Observable<MasterPerfil> {
		console.log("Buscando perfil");
		console.log(MASTER.find(masterPerfil => masterPerfil.id === id));
		return of(MASTER.find(masterPerfil => masterPerfil.id === id));
	}
	
}
