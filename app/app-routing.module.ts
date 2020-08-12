import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes necessarios
import { ContaComponent } from './conta/conta.component';
import { DetalhesPerfilComponent } from './detalhes-perfil/detalhes-perfil.component';


const routes: Routes = [
	{ path: 'conta', component: ContaComponent },
	{ path: 'conta/perfil/:id', component: DetalhesPerfilComponent },
	{ path: '', redirectTo: '/conta', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
