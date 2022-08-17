import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {
  
  public username:string = ''; //this ia a 2 Way Data Binding are of two types 1.Manually / 2.Atuomatic


  constructor() { }

  ngOnInit(): void {
  }

  updateInput(event:any):void {
    this.username = event.target.value;
  }

}
