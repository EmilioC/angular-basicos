import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Técnico_1','Técnico_2','Técnico_3','Técnico_4',];
  tecnicoBorrado: string =''

borrarTecnico(){
  const tecnicoBorrado = this.heroes.shift() || ''
  this.tecnicoBorrado = tecnicoBorrado
 console.log(this.tecnicoBorrado)
}
}

