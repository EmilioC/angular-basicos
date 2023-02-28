import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Nuevo Personaje',
    poder: 5000
  }

  get personajes (): Personaje[]{
    return this.DbzService.personajes
  }
  
  agregarNuevoPersonaje( argumento : Personaje ){
    this.personajes.push( argumento )
  }

  constructor ( private DbzService: DbzService ){
  }
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

