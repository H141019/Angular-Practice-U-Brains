import { Component, OnInit } from '@angular/core';

interface User{
  name: string;
  email: string;
  password: string;
  checkbox: boolean;
  designation: string;
  bio: string;
  terms: boolean;
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user:User = {
    name: '', 
    email: '',
    password: '',
    checkbox: false,
    designation: '',
    bio: '',
    terms: false,
  };

  public inputType:string = 'password';

  public showPassword(event:any) : void {
    // if(event.target.checked) {
    //   this.inputType = 'text';
    // }
    // else {
    //   this.inputType = 'password';
    // }

    event.target.checked ? this.inputType = 'text' : this.inputType = 'password';

  }

  constructor() { }

  ngOnInit(): void {
  }

 public submitRegister():void {
  console.log(this.user);
 }

}
