import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  currentEmployee = null;
  currentIndex = -1;
  first_name = '';
  content: any;

  constructor(private employeeService: EmployeeService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getPMOBoard()
    .subscribe( 
      data =>{
        this.retrieveEmployees();
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  }

  retrieveEmployees()  {
    this.employeeService.getAll()
      .subscribe( 
        data => {
          console.log(data)
          this.employees = data;
        }
      )
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = null;
    this.currentIndex = -1;
  }

  setActiveEmployee(employee, index): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

  addEmployeeToContract(){
    
  }
}