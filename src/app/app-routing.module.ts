import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { ExercComponent } from './exerc/exerc.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: 'telainicial', component: TelainicialComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: 'exerc', component: ExercComponent },
  { path: 'noticias', component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
