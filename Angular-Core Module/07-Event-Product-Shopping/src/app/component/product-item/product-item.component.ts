import { Component, OnInit } from '@angular/core';

// how to create some object 
interface   Product{
  sno : string;
  name : string;
  image : string;
  qty : number;
  price : number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  public product: Product = {
    sno : 'HR1403',
    name : 'Mi Watch',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX86j6egwOoBLw4eP013WG2HqxkJ553Ks-XaoTfyUhFBVi1fbnhnECnOlpcCtieKGLfxA&usqp=CAU',
    qty : 2,
    price : 1500
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  public incrementQty():void{
    this.product = {
      // this is the whole obect we use it
      //In this we use spread opreater we use is this in ES6 javascript
      ...this.product,
      qty: this.product.qty + 1
    }
  }

  public decrementQty():void{
    this.product = {
      // this is the whole obect we use it
      //In this we use spread opreater we use is this in ES6 javascript
      ...this.product,
      qty: this.product.qty - 1 > 0 ? this.product.qty -1 : 1
    }
  }

}
