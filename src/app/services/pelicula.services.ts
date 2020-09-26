import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable() 
export class PeliculaServices {
    public nombre_pelicula = '';
    public  coleccion_peliculas= ['La bruja', 'Loco por mary'];

    prueba(nombre_pelicula){
        return nombre_pelicula;
    }
//:string):Array<string> se le puede especificar el tipo y el ti´po que devuelve
    addPelicula(nombre_pelicula:string):Array<string>{
        this.coleccion_peliculas.push(nombre_pelicula);
        return this.getPelicula();
    }

    deletePelicula(index:number){
        this.coleccion_peliculas.splice(index,1);
        return this.getPelicula();        
    }

    getPelicula(){
        return this.coleccion_peliculas;
    }

}