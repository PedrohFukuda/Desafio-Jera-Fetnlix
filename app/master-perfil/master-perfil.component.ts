import { Component, OnInit, Input } from '@angular/core';
//Componentes necessarios
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil';
//Componentes de serviço
import { MasterPerfilService } from '../services/master-perfil.service';

@Component({
  selector: 'app-master-perfil',
  templateUrl: './master-perfil.component.html',
  styleUrls: ['./master-perfil.component.css']
})
export class MasterPerfilComponent implements OnInit {
	@Input() masterPerfil: MasterPerfil;

  constructor( private masterService: MasterPerfilService) {
	 }

  ngOnInit(): void {
		this.getPerfil(this.masterPerfil.id);
	}
	
	getPerfil(id: number): void{
		this.masterService.getPerfil(id);
	}

}
