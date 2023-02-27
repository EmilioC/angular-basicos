import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 15000 
    },
    {  nombre: 'Vegeta',
      poder: 7500}
  ]

  nuevo: Personaje = {
    nombre: 'Nuevo Personaje',
    poder: 5000
  }

  agregarNuevoPersonaje( argumento : Personaje ){
    this.personajes.push( argumento )
  }
/*

agregar( ){
  if (this.nuevo.nombre.trim().length === 0){ return; }

  console.log( this.nuevo )

  this.personajes.push (this.nuevo)
  this.nuevo = {
    nombre: '',
    poder: 0
    }
  } */
}
