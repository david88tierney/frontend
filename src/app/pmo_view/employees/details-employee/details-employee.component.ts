import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/_services/employee.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
  currentEmployee = null;
  message = '';
  content: any;
  contract = {
    short_name : ''
  };
  
  constructor(
    private userService: UserService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe( 
        data =>{
          this.message = '';
          this.getEmployee(this.route.snapshot.paramMap.get('id'))
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      )
  }

  getEmployee(id): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          
          this.currentEmployee = data;
          console.log(data)
        },
        error => {
          console.log(error)
        });
  }

  updateEmployee(): void {
    this.employeeService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Employee was updated successfully!';
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/employees']);
      },
      error => {
        console.log(error);
      });
  }

  returnToTable(){
    this.router.navigate(['/employees']);
  }

}