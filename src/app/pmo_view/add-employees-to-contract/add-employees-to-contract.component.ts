import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/_services/contract.service';
import { EmployeeService } from 'src/app/_services/employee.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-add-employees-to-contract',
  templateUrl: './add-employees-to-contract.component.html',
  styleUrls: ['./add-employees-to-contract.component.css']
})
export class AddEmployeesToContractComponent implements OnInit {
  content: any;
  employees: any;
  contracts: any;
  selectedEmployee: number;
  selectedContract: number;

  constructor(
    private userService: UserService,
    private contractService: ContractService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe( 
        data => {
          this.retrieveEmployeesAndContracts();
        },
        err =>{
          this.content =  JSON.parse(err.error).message;
        });
  }


  retrieveEmployeesAndContracts(){
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        err =>{
          console.log('something went wrong getting employees', err)
        }
      )
      this.contractService.getAll()
        .subscribe(
          data => {
            this.contracts = data;
            console.log(data);
          }
        )
  }

  bindEmployeeToContract(){
    this.employeeService.bindEmployeeToContract(this.selectedEmployee, this.selectedContract)
  }

}
