import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee} from "../../models/Employee";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

public employee:Employee = {
//   sno : 'aa011',
//   name : 'harshit',
//   age : 27,
//   designation : 'Sr.Software Engineer',
//   doj : new Date(),
//   salary : 100000
} as Employee;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployee();
  }

}
