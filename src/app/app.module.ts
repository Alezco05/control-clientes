import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Firebase
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule,FirestoreSettingsToken} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';

//ngModel
import {FormsModule} from '@angular/forms';

//Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//Componentes
import { CabeceroComponent } from './components/cabecero/cabecero.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { ClienteService } from './services/cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firestore,'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()

  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
