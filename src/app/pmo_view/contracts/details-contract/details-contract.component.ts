import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/_services/contract.service';
import { EmployeeService } from 'src/app/_services/employee.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-details-contract',
  templateUrl: './details-contract.component.html',
  styleUrls: ['./details-contract.component.css']
})
export class DetailsContractComponent implements OnInit {
  content: any;
  currentContract = null;
  message = '';
  employees: any;

  constructor(
    private userService: UserService,
    private contractService: ContractService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe(
        data => {
          this.message = '';
          this.getAllEmployees();
          this.getContract(this.route.snapshot.paramMap.get('id'));
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      )
  }

  getAllEmployees(){
    this.employeeService.getAll()
      .subscribe( 
        data => {
          this.employees = data;
        },
        err => {
          console.log('Something wrong happened retreiving list of employees.');
        }
      )
  }

  getContract(id){
    this.contractService.get(id)
      .subscribe (
        data => {
          this.currentContract = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
  }

  updateContract(){
    this.contractService.update(this.currentContract.id, this.currentContract)
      .subscribe(
        response =>{
          console.log(response);
          this.message = 'The Contract was updated successfully.';
          this.router.navigate(['/contracts']);
        },
        error => {
          console.log(error);
          this.message = 'The contract was not able to update.'
        }
      )
  }

  deleteContract(){
    this.contractService.delete(this.currentContract.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/contracts']);
        },
        error => {
          console.log(error)
        }
      )
  }

  returnToTable(){
    this.router.navigate(['/contracts']);
  }
}
