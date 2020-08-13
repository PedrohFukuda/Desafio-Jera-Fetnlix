import { Perfil } from '../base-data-types/perfil-dt/perfil';
import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil'

//const maxPerfis: number = 3;

export interface Conta {
	id: number;
	masterPerfil: MasterPerfil;
	//numPerfis: number;
	perfis: Perfil[];
}