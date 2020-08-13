import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//Componentes necessarios
import { Conta } from '../base-data-types/conta'
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil'
import { Perfil } from '../base-data-types/perfil-dt/perfil'
//Componentes do banco de dados
import { CONTA } from '../mock-data/mock-contas'
//Componentes de serviço
import { MasterPerfilService } from './master-perfil.service';


@Injectable({
  providedIn: 'root'
})
export class ContaService {
	currId: number = 2;

	constructor(
		private masterService: MasterPerfilService
	) { }
	
	getContas(): Observable<Conta[]>{
		return of(CONTA);
	}

	//GETS
	getConta(id: number): Observable<Conta>{
		return of(CONTA.find(conta => conta.id === id));
	}

	getContaByEmail(email: string): Conta{
		return CONTA.find(conta => conta.masterPerfil.email === email);
	}

	getMasterPerfil(id: number): Observable<MasterPerfil>{
		return of(CONTA.find(conta => conta.id === id).masterPerfil);
	}

	getPerfisBase(id: number): Observable<Perfil[]>{
		return of(CONTA.find(conta => conta.id === id).perfis);
	}

	//ADDS
	create(email: string, senha: string): Observable<Conta> {
		if (this.getContaByEmail(email) === undefined) {
			const novaConta: Conta = { 
				id: this.currId, 
				masterPerfil: undefined,
				perfis: []
			}
			CONTA.push( novaConta );
			CONTA[this.currId].masterPerfil = this.masterService.create(email, senha, this.currId);
			this.getConta(this.currId);

			this.currId++;
			return of(CONTA[this.currId-1]);
		}

		return undefined;
	}
	
}
