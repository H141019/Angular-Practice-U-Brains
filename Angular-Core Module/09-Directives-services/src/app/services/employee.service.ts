import { Injectable } from '@angular/core';
import { Employee } from '../component/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee:Employee = {
    sno : 'aa011',
    name : 'harshit',
    age : 27,
    designation : 'Sr.Software Engineer',
    doj : new Date(),
    salary : 100000
  };  

  constructor() { }

 public getEmployee():Employee {
  return this.employee;
 }

}
