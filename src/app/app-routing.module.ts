import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasComponent } from './components/peliculas/peliculas.component'; 
import { FavoritaComponent } from './components/favorita/favorita.component'; 
import { HomeComponent } from './components/home/home.component';  
import { SeleccionadoComponent } from './components/seleccionado/seleccionado.component';  
import { SoundtrackComponent } from './components/soundtrack/soundtrack.component';  



const APPROUTES: Routes = [
  {path: 'peliculas', component: PeliculasComponent },
  {path: 'favorita', component: FavoritaComponent },
  {path: 'home', component: HomeComponent },
  {path: 'selecciona/:id', component: SeleccionadoComponent },
  {path: 'selecciona', component: SeleccionadoComponent },
  {path: 'soundtrack', component: SoundtrackComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(APPROUTES),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }


//export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders {} = RouterModule.forRoot(APPROUTES);


