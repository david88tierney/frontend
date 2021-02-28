import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/_services/contract.service';
import { UserService } from 'src/app/_services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  content: any;
  viewChart = false;
  submitted = false;

  contract = {
    status: '',
    name: '',
    short_name: '',
    contract_vehicle: '',
    number: '',
    POP_begin: '',
    POP_end: '',
    point_of_contact: '',
    alternate_point_of_contact: '',
    poc_phone: '',
    poc_email: '',
    contract_type: '',
    sub_or_prime: '',
    ceiling_value: ''
  }
  constructor(
    private userService: UserService,
    private contractService: ContractService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe(
        data => {
          this.viewChart = true;
        },
        err =>{
          this.content = JSON.parse(err.error).message;
        }
      )
  }

  saveContract(){
    const data = {
      status: this.contract.status,
      name: this.contract.name,
      short_name : this.contract.short_name,
      contract_vehicle: this.contract.contract_vehicle,
      number: this.contract.number,
      POP_begin: this.contract.POP_begin,
      POP_end: this.contract.POP_end,
      point_of_contact: this.contract.point_of_contact,
      alternate_point_of_contact: this.contract.alternate_point_of_contact,
      poc_phone: this.contract.poc_phone,
      poc_email: this.contract.poc_email,
      contract_type: this.contract.contract_type,
      sub_or_prime: this.contract.sub_or_prime,
      ceiling_value: this.contract.ceiling_value
    }

    this.contractService.create(data)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate(['/contracts']);
        },
        err => {
          console.log(err)
        }
      )
  }

  newContract(){
    this.submitted = false;
    this.contract = {
      status: '',
      name: '',
      short_name: '',
      contract_vehicle: '',
      number: '',
      POP_begin: '',
      POP_end: '',
      point_of_contact: '',
      alternate_point_of_contact: '',
      poc_phone: '',
      poc_email: '',
      contract_type: '',
      sub_or_prime: '',
      ceiling_value: ''
    }
  }

  returnToTable(){
    this.router.navigate(['/contracts'])
  }

}
