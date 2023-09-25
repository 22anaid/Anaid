import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './Component/pages/galeria/galeria.component';
import { InicioComponent } from './Component/pages/inicio/inicio.component';

const routes: Routes = [
  {path:'Inicio',component:InicioComponent},
  {path:'Galeria',component:GaleriaComponent},
  {path:'**',component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
