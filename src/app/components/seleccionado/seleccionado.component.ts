import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/Pelicula/pelicula';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-seleccionado',
  templateUrl: './seleccionado.component.html',
  styleUrls: ['./seleccionado.component.css']
})
export class SeleccionadoComponent implements OnInit {
  public titulo: string;
  public parametro: number;
  public parametroViejo: number;
  
    public peliculas: Array<Pelicula>;
    //*Se agrego seleccionado para mostrar un item
    public seleccionado: any [];
    ids ='';
    
    //--- _route para obteneer el id del url
      constructor(private _route: ActivatedRoute,
        private _router: Router){
          this._route.params.subscribe( params => {
            console.log("Parametro por routed " + params['id'])
          this.parametro = Number(params['id']);
          console.log("este es numero: " + this.parametro);
          })
    
      this.peliculas=[
        new Pelicula("Spiderman 4", 2018,"https://i.pinimg.com/564x/70/9b/45/709b45e308802075eed464a9ab01146e.jpg"),
        new Pelicula("Avengers", 2010,"https://i.pinimg.com/originals/69/12/35/6912350d2c45479e68fbb01143a8e5bb.jpg"),
        new Pelicula("Jhon Wick", 2020,"https://sm.ign.com/t/ign_latam/screenshot/default/07956f40-77c4-11e9-9073-657a85982e73_f21x.1280.jpg"),
        new Pelicula("Busqueda Implacable", 2019,"https://vignette.wikia.nocookie.net/doblaje/images/e/e8/Tak3n.jpg/revision/latest/scale-to-width-down/1000?cb=20141222194803&path-prefix=es")
      ]

    //*Se agrego seleccionado para mostrar un item
     this.seleccionado= [new Pelicula(this.peliculas[this.parametro].title,this.peliculas[this.parametro].year, this.peliculas[this.parametro].image)]    
    }
  
      ngOnInit(){
        //**comprobacion de udemy viejo
          this._route.params.forEach((parametros: Params) => {
            this.parametroViejo = parametros['id'];
            console.log("Esto es del ang udemy viejo: " + parametros['id'] );
          });
        }
  
        redirecciona(){
          this._router.navigate(['favorita']);
        }
        
  }
    
    
    
    