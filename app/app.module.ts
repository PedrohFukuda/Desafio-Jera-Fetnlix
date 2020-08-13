import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { PerfisComponent } from './perfis/perfis.component';
import { MasterPerfilComponent } from './master-perfil/master-perfil.component';
import { FilmeComponent } from './filme/filme.component';
import { DetalhesPerfilComponent } from './detalhes-perfil/detalhes-perfil.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { LoginComponent } from './login/login.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    PerfisComponent,
    MasterPerfilComponent,
    FilmeComponent,
    DetalhesPerfilComponent,
    ListaFilmesComponent,
    LoginComponent,
    ListaContasComponent
  ],
  imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
