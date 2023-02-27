import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 252
  }

agregar( ){
  console.log(this.nuevo)
}

cambiarNombre( event: any){
  console.log( event.target.value)
}

}
