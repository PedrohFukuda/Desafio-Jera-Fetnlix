import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
//Componentes necessarios
import { ContaComponent } from './conta/conta.component';
import { DetalhesPerfilComponent } from './detalhes-perfil/detalhes-perfil.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
	{ path: 'conta/:id', component: ContaComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'conta/perfil/:id', component: DetalhesPerfilComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
	constructor(private router: Router){}

	RedirectConta(id: number){
		this.router.navigate(['conta/${{id}}']);
		console.log(id);
	}
 }