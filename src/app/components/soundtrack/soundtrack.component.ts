import { Component } from '@angular/core';
import { Soundtrack } from '../models/soundtrack';
import { NgModule } from '@angular/core';

@Component({
    selector: 'soudtrack',
    templateUrl: './soundtrack.component.html',
    styleUrls: ['./soundtrack.component.css']
})

export class SoundtrackComponent{
    public soundtrack: Soundtrack;
    public soundtracks: Array<Soundtrack>;

    constructor(){
        this.soundtrack = new Soundtrack("","","");
        this.soundtracks=[
            new Soundtrack("Fantasma de la opera","Sara Brightman","1998"),
            new Soundtrack("Body Guard","Withney Houston","1998"),
            new Soundtrack("Blues Brothers Band","Brothers","1986"),
            new Soundtrack("Top Gun","Guns and Roses","1982")
        ];
    }
    onSubmit(){
      
        this.soundtracks.push(this.soundtrack);
        console.log(this.soundtrack);
        this.soundtrack = new Soundtrack("","","");
        console.log("nula?: " + this.soundtrack);
    }
}