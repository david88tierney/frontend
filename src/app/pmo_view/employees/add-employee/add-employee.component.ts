import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/_services/contract.service';
import { EmployeeService } from 'src/app/_services/employee.service';
import { UserService } from 'src/app/_services/user.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  content: any;
  viewChart = false;
  submitted = false;
  
  employee  = {
    status: '',
    prefix: '',
    first_name: '',
    last_name: '',
    suffix: '',
    title: '',
    ssn: '',
    dob: '',
    address: '',
    mobile_phone: '',
    work_phone: '',
    home_phone: '',
    clearance: '',
    clearance_date: '',
    clearance_exp_date: '',
    vacation_accrual_base_date: '',
    position: '',
    hire_date: '',
    termination_date: '',
    salary: 0,
    last_pay_change: '',
    email: '',
    rssi_email: '',
    gov_email: '',
    remarks: '',
    race: '',
    gender: '',
    flsa: '',
    work_status : ''
  };

  contract = {
    short_name : ''
  };

  contracts: any;

  selectedContract: any;

  constructor(
    private userService: UserService, 
    private employeeService: EmployeeService,
    private router: Router,
    private contractService: ContractService
     ) { }

  ngOnInit() {
    this.userService.getAddEmployee()
      .subscribe( 
        data =>{
          this.getContractShortNames();
          this.viewChart = true;
        },
        err =>{
          this.content = JSON.parse(err.error).message;
        }
      )
  }

  getContractShortNames() {
    this.contractService.getAll()
      .subscribe( data => {
        this.contracts = data;
      })
  }

  saveEmployee(): void {
    const data  = {
      status: this.employee.status,
      prefix: this.employee.prefix,
      first_name: this.employee.first_name,
      last_name: this.employee.last_name,
      suffix: this.employee.suffix,
      address: this.employee.address,
      mobile_phone: this.employee.mobile_phone,
      work_phone: this.employee.work_phone,
      home_phone: this.employee.home_phone,
      dob: this.employee.dob,
      ssn: this.employee.ssn,
      clearance: this.employee.clearance,
      clearance_date: this.employee.clearance_date,
      clearance_exp_date: this.employee.clearance_exp_date,
      vacation_accrual_base_date: this.employee.vacation_accrual_base_date,
      position: this.employee.position,
      email: this.employee.email,
      rssi_email: this.employee.rssi_email,
      gov_email: this.employee.gov_email,
      hire_date: this.employee.hire_date,
      termination_date: this.employee.termination_date,
      work_status: this.employee.work_status,
      salary: this.employee.salary,
      last_pay_change: this.employee.last_pay_change,
      race: this.employee.race,
      gender: this.employee.gender,
      flsa: this.employee.flsa,
      remarks: this.employee.remarks,
      contract: this.contract.short_name
    };

    this.employeeService.create(data)
      .subscribe(
        response =>{
          this.submitted = true;
        },
        error => {
          console.log(error)
        });
  }

  newEmployee():void {
    this.submitted = false;
    this.employee = {
      status: '',
      prefix: '',
      first_name: '',
      last_name: '',
      suffix: '',
      title: '',
      ssn: '',
      dob: '',
      address: '',
      mobile_phone: '',
      work_phone: '',
      home_phone: '',
      clearance: '',
      clearance_date: '',
      clearance_exp_date: '',
      vacation_accrual_base_date: '',
      position: '',
      hire_date: '',
      termination_date: '',
      salary: 0,
      last_pay_change: '',
      email: '',
      rssi_email: '',
      gov_email: '',
      remarks: '',
      race: '',
      gender: '',
      flsa: '',
      work_status : ''
    }
  }

  returnToTable(){
    this.router.navigate(['/employees'])
  }

}

