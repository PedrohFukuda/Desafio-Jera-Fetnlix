import { Injectable } from '@angular/core';
//Componentes necessarios
import { Conta } from '../base-data-types/conta'
//Componentes de serviço
import { ContaService } from '../services/conta.service';
//Componentes de rota
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
	conta: Conta;

	constructor(
		private contaService: ContaService,
		private router: Router
	) { }
	
	logar(email: string, senha: string): void{
		this.conta = this.contaService.getContaByEmail(email);
		
		if (
		(this.conta !== undefined) && 
		(this.conta.masterPerfil.senha === senha)
		){
			console.log('Conta encontrada');
			console.log(this.conta);
			this.router.navigate(['conta/' + this.conta.id]);
			
		} else {
			alert('Email ou senha incorretos!');
		}
		
	}
}
