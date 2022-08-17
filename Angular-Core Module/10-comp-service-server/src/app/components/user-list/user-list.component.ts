import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
//  public userShow: boolean = false;

  public user:Users[] = [] as Users[];

  public errorMessage: string | undefined = undefined;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  
  }

  public getUsersData(){
    this.userService.getUsers().subscribe((data : Users[]) => {
      this.user = data; 
    }, (error) => {
      this.errorMessage = error;
      });
  }

  // public getUsersHide():void {
  //     this.userService.getUsers().subscribe((data : Users[]) => {
  //     this.user = data;
  //   });
  // }
  

 

}
