import { Component, OnInit } from '@angular/core';

interface   Product{
  sno : string;
  name : string;
  image : string;
  price : number;
  qty : number;
}

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

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

}
