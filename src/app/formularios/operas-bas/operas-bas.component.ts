import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1=0;
  num2=0;
  resultado: number = 0;
  //C a F
  grado: number = 0;
  cel: number = 0;
  far: number = 0;
  res=0;

  radioButton: string = '';

  //Hacer la operación indicada 

 /* operacion(): void {
    this.resultado=  parseInt(this.num1)+parseInt(this.num2);
    //Operaciones
    if (this.radioButton == "1") {
      this.resultado = parseInt(this.num1) + parseInt(this.num2);
    }
    else if (this.radioButton == "2") {
      this.resultado = parseInt(this.num1) - parseInt(this.num2);
    }
    else if (this.radioButton == "3") {
      this.resultado = parseInt(this.num1) * parseInt(this.num2);
    }
    else if (this.radioButton == "4") {
      this.resultado = parseInt(this.num1) / parseInt(this.num2);
    }
    //Cel
    else if(this.radioButton == "5"){
      this.res= ((this.grado* 9/5) + 32);
    }
    else if(this.radioButton == "6"){
      this.res = ((this.grado- 32) * 5/9);
    }
    
    }*/


    suma(){
      this.res=this.num1+this.num2;
    }
    
    }
