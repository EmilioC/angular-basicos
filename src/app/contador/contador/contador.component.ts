import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
  <h1>CONTADOR COMPONENT</h1>  
<div class="container p-4">
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <button (click)= "acumular(+30)" type="button" class="btn btn-success"> + 1</button>
      </div>
      <div class="col">
        <button (click)= "acumular(-30)" type="button" class="btn btn-success"> - 1</button>
      </div>
      <div class="col">
        <div class="alert alert-primary" role="alert">
          {{numero_1}}
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container text-center p-4">
  <div class="row align-items-center">
    <div class="col">
      <div class="progress"  role="progressbar" aria-label="Basic example" aria-valuenow= "numero_1" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
        <div class="progress-bar" style="width: 80%">{{numero_1}}</div>
      </div>
    </div>
    <div class="col">
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="numero_2" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
        <div class="progress-bar" style="width: 10%">{{numero_2}}</div>
      </div>
    </div>
    <div class="col">
      <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
        <div class="progress-bar" style="width: 10%">{{numero_3}}</div>
      </div>
    </div>
  </div>
</div>

    
    `

})

export class ContadorComponent{

    public titulo:string = 'Contador APP';
 public numero_1:number = 50;
 public numero_2:number = 70;
 public numero_3:number = 80;

 sumar(){
  this.numero_1 = this.numero_1 *6
 }

 restar(){
  this.numero_1 = this.numero_1 /6
 }

 acumular ( valor: number){
  this.numero_1 += valor;
 }

}