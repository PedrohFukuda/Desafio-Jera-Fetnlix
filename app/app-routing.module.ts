import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
//Componentes necessarios
import { ContaComponent } from './conta/conta.component';
import { DetalhesPerfilComponent } from './detalhes-perfil/detalhes-perfil.component';
import { LoginComponent } from './login/login.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';

const routes: Routes = [
	{ path: 'conta/:id', component: ContaComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'conta/perfil/:id', component: DetalhesPerfilComponent },
	{ path: 'allcontas', component: ListaContasComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	constructor(private router: Router){}

	RedirectConta(id: number){
		if (id === 99)
			this.router.navigate(['allcontas']);
		else if (id !== -1){
			this.router.navigate(['conta/{{id}}']);
		}
	}
 }