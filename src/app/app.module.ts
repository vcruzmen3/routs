import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//import {ModuleWithProviders, appRoutingProviders } from './app-routing.module';
import { RouteModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { FavoritaComponent } from './components/favorita/favorita.component';
import { NvbarComponent } from './components/shared/nvbar/nvbar.component';
import { SeleccionadoComponent } from './components/seleccionado/seleccionado.component';

import { SoundtrackComponent } from './components/soundtrack/soundtrack.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculasComponent,
    FavoritaComponent,
    NvbarComponent,
    SeleccionadoComponent,
    SoundtrackComponent,
],
  imports: [
    BrowserModule,
//    appRoutingProviders
    RouteModule,
    FormsModule 
  ],

 // providers: [ModuleWithProviders],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
