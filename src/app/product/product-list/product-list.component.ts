import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
productos:any[]=[
  {
    "productId":1,
    "modelo":"Sentra",
    "Descripcion":"4 Puertas familiar",
    'Year':'Febrero 3 2020',
    'Precio': 120000,
    'Marca':'NISSAN',
    'Color':'Morado',
    'imagenUrl':'datos pendientes'
  }
]
}
