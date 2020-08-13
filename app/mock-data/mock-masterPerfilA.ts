import { MasterPerfil } from '../base-data-types/perfil-dt/master-perfil';

export const MASTER: MasterPerfil[] = [
	{
		id: 0,
		email: 'AA@A',
		senha: 'AA',
		dtNascimento: 'AA/AA/AA',
		perfilBase: { id: 0, nome: 'Alpha', lsFilmesAssistir: [4, 2, 3, 1] },
		idConta: 0
	},
	{
		id: 1,
		email: 'BB@B',
		senha: 'BB',
		dtNascimento: 'BB/BB/BB',
		perfilBase: { id: 1, nome: 'Beta', lsFilmesAssistir: [2, 1, 0, 3]},
		idConta: 1
	}
];
