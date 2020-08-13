import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Conta } from '../base-data-types/conta';
//Componentes de serviço
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@Input() conta: Conta;
	emailTxt: string;
	senhaTxt: string;

  constructor(
		private loginService: LoginService
	) { }

  ngOnInit(): void {
	}
	
	logar(): void {
		this.loginService.logar(this.emailTxt, this.senhaTxt);

	}

}
