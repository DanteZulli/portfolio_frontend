import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
// Importamos el modulo de Angular HTTP para conectar el back con el front
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { interceptorProvider } from './service/interceptor-service';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { MisEstudiosComponent } from './components/mis-estudios/mis-estudios.component';
import { MiExperienciaComponent } from './components/mi-experiencia/mi-experiencia.component';
import { MisHabilidadesComponent } from './components/mis-habilidades/mis-habilidades.component';
import { ContactoAnuncioComponent } from './components/contacto-anuncio/contacto-anuncio.component';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos.component';
import { ContactoFormularioComponent } from './components/contacto-formulario/contacto-formulario.component';
import { NewExperienciaComponent } from './components/mi-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/mi-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/mis-estudios/new-educacion.component';
import { EditEducacionComponent } from './components/mis-estudios/edit-educacion.component';
import { EditHabilidadesComponent } from './components/mis-habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/mis-habilidades/new-habilidades.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditSobreMiComponent } from './components/sobre-mi/edit-sobre-mi.component';
import { NewProyectosComponent } from './components/mis-proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/mis-proyectos/edit-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SobreMiComponent,
    MisEstudiosComponent,
    MiExperienciaComponent,
    MisHabilidadesComponent,
    ContactoAnuncioComponent,
    MisProyectosComponent,
    ContactoFormularioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditHabilidadesComponent,
    NewHabilidadesComponent,
    EditHeaderComponent,
    EditSobreMiComponent,
    NewProyectosComponent,
    EditProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
