import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0;
  op:string=''
  radioButton:string ='';

  operacion():void{
    /*this.resultado=  parseInt(this.num1)+parseInt(this.num2);*/
    //Operaciones
    if(this.radioButton == "1"){
      this.resultado = parseInt(this.num1) + parseInt(this.num2);
    }
    else if(this.radioButton == "2"){
      this.resultado = parseInt(this.num1) - parseInt(this.num2);
    }
    else if(this.radioButton == "3"){
      this.resultado = parseInt(this.num1) * parseInt(this.num2);
    }
    else if(this.radioButton == "4"){
        this.resultado =parseInt(this.num1)/parseInt(this.num2);
    }

  }

}
