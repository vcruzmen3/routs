import { Component, OnInit } from '@angular/core';
import { PeliculaServices } from '../../services/pelicula.services';
import { NgModule } from '@angular/core'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PeliculaServices]
})

export class HomeComponent implements OnInit {
  public titulo="Peliculas Disponibles"
  public listado_peliculas:Array<string>; 
  public pelicula_a_guardar:string;

  constructor(
    private _peliculaService: PeliculaServices) {
     }
    
  ngOnInit(): void {
    this.listado_peliculas =  this._peliculaService.getPelicula();
    console.log(this.listado_peliculas);
    console.log(this.pelicula_a_guardar);
  }

  guardarPelicula(){
    this._peliculaService.addPelicula(this.pelicula_a_guardar);
    this.pelicula_a_guardar = null;
  }

  eliminarPelicula(index:number){
    this._peliculaService.deletePelicula(index);    
  }

  
}
