import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  public tourName: string = "Paris";
  public tourImages: string = "https://images.pexels.com/photos/164572/pexels-photo-164572.jpeg?cs=srgb&dl=pexels-pixabay-164572.jpg&fm=jpg"
  public time: string = new Date().toLocaleTimeString();
  //public count: number = 0;

  constructor() { 
    this.updateTime();
   }

  ngOnInit(): void {
  }

  public getDate():string{
    return new Date().toLocaleDateString();
  }

  // public getTime():String{
  //   return new Date().toLocaleTimeString();
  // }

  public updateTime():void {
    setInterval( () => {
      this.time = new Date().toLocaleTimeString();
    } , 1000); 
  }

  // public incrCounter(): void{
  //   alert(`I am from Incr Counter`);
  // }

  // public incrCounter(): void {
  //   this.count = this.count + 1;
  // }

  // public decrCounter(): void {
  //   this.count = this.count - 1 > 0 ? this.count -1 : 0;
  // }

}
