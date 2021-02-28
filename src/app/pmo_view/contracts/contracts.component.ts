import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/_services/contract.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  content: any;
  contracts: any;
  currentContract = null;
  currentIndex = -1;
  name = '';

  constructor(
    private userService: UserService,
    private contractService: ContractService
  ) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe(
        data =>{
          this.retrieveContracts();
        },
        err =>{
          this.content =  JSON.parse(err.error).message;
        });
  }

  retrieveContracts(){
    this.contractService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.contracts = data;
        },
        err => {
          console.log(err)
        }
      )
  }

  refreshList(){
    this.retrieveContracts();
    this.currentContract = null;
    this.currentIndex = -1;
  }

  setActiveContract(contract, index) {
    this.currentContract = contract;
    this.currentIndex = index;
  }

}
