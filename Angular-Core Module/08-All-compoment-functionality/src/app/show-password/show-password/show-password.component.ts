import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit { 
  
  // when this password place we write also texr,date, range
  public inputType:string = 'password';
  
  public showPassword(event:any):void {
      // if(event.target.checked){
      //   this.inputType = 'text';
      // }
      // else{
      //   this.inputType = 'password';

      // }

      event.target.checked ? this.inputType = 'text' : this.inputType = 'password';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
