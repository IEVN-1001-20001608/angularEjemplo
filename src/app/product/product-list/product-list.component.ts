import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //Directivas *nhif
  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='filtro';
  

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProductos[]=[
  {
    "productoId":1,
    "modelo":"Sentra",
    "descripcion":"4 Puertas familiar",
    'year':'Febrero 3 2020',
    'precio': 120000,
    'marca':'NISSAN',
    'color':'Morado',
    'imagenUrl':'https://img.remediosdigitales.com/95de99/nissan-np300/650_1200.jpeg'
  },
  {
    "productoId":2,
    "modelo":"A4",
    "descripcion":"4 Puertas familiar",
    'year':'Febrero 3 2020',
    'precio': 120000,
    'marca':'AUDI',
    'color':'Blanco',
    'imagenUrl':'https://img.remediosdigitales.com/310f73/mg-5-y-mg-gt-mexico_5/650_1200.jpg'
  },
  {
    "productoId":3,
    "modelo":"Rio",
    "descripcion":"2 Puertas familiar",
    'year':'Marzo 5 2020',
    'precio': 150000,
    'marca':'KIA',
    'color':'Azul',
    'imagenUrl':'https://img.remediosdigitales.com/c92fc5/chevrolet-captiva/650_1200.jpg'
  }
]
}
