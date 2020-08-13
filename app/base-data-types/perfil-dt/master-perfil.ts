import { Perfil } from './perfil';

export interface MasterPerfil {
	id: number;
	email: string;
	senha: string;
	dtNascimento: string;
	perfilBase: Perfil;
	idConta: number;
}