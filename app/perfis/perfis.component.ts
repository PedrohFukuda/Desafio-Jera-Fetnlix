import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { Perfil } from '../base-data-types/perfil-dt/perfil';
import { Conta } from '../base-data-types/conta';


@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent implements OnInit {
	@Input() perfis: Perfil[];
	@Input() conta: Conta;

  constructor() { }

  ngOnInit(): void {}

}
