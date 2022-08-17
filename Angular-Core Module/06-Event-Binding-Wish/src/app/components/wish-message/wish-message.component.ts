import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {
  
  public message:string = "Hello World";

  constructor() { }

  ngOnInit(): void {
  }

  public updateMessage(msg: string):void {
    this.message = msg;
  }

  // public sayGoodAfternoon():void {
  //   this.message = "Good Afternoon";
  // }

  // public sayGoodEvening():void {
  //   this.message = "Good Evening";
  // }

  // public sayGoodNight():void {
  //   this.message = "Good Night";
  // }

}
