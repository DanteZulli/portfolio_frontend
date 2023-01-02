import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './components/mi-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/mi-experiencia/new-experiencia.component';
import { EditEducacionComponent } from './components/mis-estudios/edit-educacion.component';
import { NewEducacionComponent } from './components/mis-estudios/new-educacion.component';
import { EditHabilidadesComponent } from './components/mis-habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/mis-habilidades/new-habilidades.component';
import { EditProyectosComponent } from './components/mis-proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/mis-proyectos/new-proyectos.component';
import { EditSobreMiComponent } from './components/sobre-mi/edit-sobre-mi.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'new-experiencia', component:NewExperienciaComponent},
  {path:'edit-experiencia/:id', component:EditExperienciaComponent},
  {path:'new-educacion', component:NewEducacionComponent},
  {path:'edit-educacion/:id', component:EditEducacionComponent},
  {path:'new-habilidades', component:NewHabilidadesComponent},
  {path:'edit-habilidades/:id', component:EditHabilidadesComponent},
  {path:'edit-header/1', component:EditHeaderComponent},
  {path:'edit-sobre-mi/1', component:EditSobreMiComponent},
  {path:'new-proyectos', component:NewProyectosComponent},
  {path:'edit-proyectos/:id', component:EditProyectosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
