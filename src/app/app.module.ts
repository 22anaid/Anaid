import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { PagesComponent } from './Component/pages/pages.component';
import { DatosComponent } from './Component/pages/datos/datos.component';
import { GaleriaComponent } from './Component/pages/galeria/galeria.component';
import { InicioComponent } from './Component/pages/inicio/inicio.component';
import { MapaComponent } from './Component/pages/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    DatosComponent,
    GaleriaComponent,
    InicioComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
