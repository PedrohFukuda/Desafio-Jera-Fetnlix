import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//Componentes necessarios
import { Conta } from '../base-data-types/conta'
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil'
import { Perfil } from '../base-data-types/perfil-dt/perfil'
//Componentes do banco de dados
import { CONTA } from '../mock-data/mock-contas'

@Injectable({
  providedIn: 'root'
})
export class ContaService {

	constructor() { }
	
	getContas(): Observable<Conta[]>{
		return of(CONTA);
	}

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
}
