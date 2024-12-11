import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { ExercComponent } from './exerc/exerc.component';
import { NoticiasComponent } from './noticias/noticias.component';
// Importe os outros componentes conforme necessário

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TelainicialComponent,
    ExercComponent,
    NoticiasComponent
    // Declare os outros componentes conforme necessário
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,          // Certifique-se de importar o FormsModule aqui
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
