import { Component, OnInit } from '@angular/core';


import { Pelicula } from '../models/Pelicula/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public titulo: string;
  public peliculas: Array<Pelicula>
  //tambien puede ser ---  public peliculas: Pelicula[] 
  public nombre:string;
  
    constructor(){
      this.nombre = "Pueblo  la Toscan";
    // Cuando se lance el evento click en la plantilla llamaremos a este método
  
  
    this.titulo = "Componente peliculas";
      this.peliculas=[
        new Pelicula("Spiderman 4", 2018,"https://i.pinimg.com/564x/70/9b/45/709b45e308802075eed464a9ab01146e.jpg"),
        new Pelicula("Avengers", 2010,"https://i.pinimg.com/originals/69/12/35/6912350d2c45479e68fbb01143a8e5bb.jpg"),
        new Pelicula("Jhon Wick", 2020,"https://sm.ign.com/t/ign_latam/screenshot/default/07956f40-77c4-11e9-9073-657a85982e73_f21x.1280.jpg"),
        new Pelicula("Busqueda Implacable", 2019,"https://vignette.wikia.nocookie.net/doblaje/images/e/e8/Tak3n.jpg/revision/latest/scale-to-width-down/1000?cb=20141222194803&path-prefix=es")
      ]
    }
  
    ngOnInit(): void {
      
    }
  
  
  }
  