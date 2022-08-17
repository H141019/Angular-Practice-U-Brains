import { Component, OnInit } from '@angular/core';

interface   Product{
  sno : string;
  name : string;
  image : string;
  price : number;
  qty : number;
}


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products: Product[] = [
    {
    sno : 'HR1403',
    name : 'Mi Watch',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX86j6egwOoBLw4eP013WG2HqxkJ553Ks-XaoTfyUhFBVi1fbnhnECnOlpcCtieKGLfxA&usqp=CAU',
    price : 1500,
    qty : 1
    },
    {
      sno : 'HR1404',
      name : 'Apple Watch',
      image : 'https://fossil.scene7.com/is/image/FossilPartners/FS5894_main?$sfcc_fos_hi-res$',
      price : 2500,
      qty : 1
      },
      {
        sno : 'HR1405',
        name : 'RedMe Watch',
        image : 'https://5.imimg.com/data5/MW/LJ/PS/SELLER-17755668/skmei-1251-black-chronograph-digital-watch-for-men-500x500.jpeg',
        price : 2000,
        qty : 1
        
      },
      {
        sno : 'HR1406',
        name : 'Oppo Watch',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp_BjNQuOn7_mSSs_sLQLnnEFZ9IWe4voTA&usqp=CAU',
        price : 3000,
        qty : 1
        
      }
  ];
  constructor() { }

  ngOnInit(): void {
  }
// In this array we use as a map function
  public incrementProductQty(productId : string):void {
    this.products = this.products.map((product: Product) => {
      if(product.sno === productId) {
        return {
          ...product,
          qty: product.qty + 1
        }
      }
      return product;
    })
  }
  
  public decrementProductQty(productId : string):void {
    this.products = this.products.map((product: Product) => {
      if(product.sno === productId) {
        return {
          ...product,
          qty: product.qty - 1 > 0 ? product.qty -1 : 0
        }
      }
      return product;
    })
  } 

  // public qtyGrandTotal():number{
  //   let total:number = 0;
  //   for(let product of this.products){
  //     total += (product.qty);
  //   }
  //   return total;
  // }


  public calcGrandTotal():number{
    let total:number = 0;
    for(let product of this.products){
      total += (product.qty * product.price);
    }
    return total;
  }

}
