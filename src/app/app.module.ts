import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

/**componentes */
import { AppComponent } from './app.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';

import { ContenidoComponent } from './contenido/contenido.component';
import { NavbarBotComponent } from './navbar-bot/navbar-bot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { SobremiComponent } from './sobremi/sobremi.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    ProyectosComponent,
    SkillsComponent,
    
    ContenidoComponent,
    NavbarBotComponent,
    ModalComponent,
    SobremiComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
