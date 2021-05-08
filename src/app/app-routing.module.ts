import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ContenidoComponent } from './contenido/contenido.component';

import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { SobremiComponent } from './sobremi/sobremi.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },  
  
  {
    path: 'inicio', component: ContenidoComponent
  },  
  {
    path: 'proyectos', component: ProyectosComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'sobremi', component: SobremiComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
