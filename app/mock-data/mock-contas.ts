import { Conta } from '../base-data-types/conta';
import { MASTER } from './mock-masterPerfilA'

export const CONTA: Conta[] = [
	{ 
		id: 0, 
		masterPerfil: MASTER[0], 
		perfis: [
			{ id: 0, nome: 'Armando' },
			{ id: 1, nome: 'Ariel' },
			{ id: 2, nome: 'Arthur' }
		]
	},
	{ 
		id: 1, 
		masterPerfil: MASTER[1],
		perfis: [
			{ id: 0, nome: 'Bruno' },
			{ id: 1, nome: 'Bianca' }
		]
	}
];

