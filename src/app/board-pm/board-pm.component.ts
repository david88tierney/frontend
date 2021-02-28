import { Component, OnInit } from '@angular/core';
import { PmService } from '../_services/pm.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-pm',
  templateUrl: './board-pm.component.html',
  styleUrls: ['./board-pm.component.css']
})
export class BoardPmComponent implements OnInit {
  employees: any;
  content: any;

  constructor(private pmService: PmService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getPMBoard()
      .subscribe( 
        data =>{
          this.content = data;
          console.log(data, 'PM board')
          this.retrieveEmployees();
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      )
    // this.retrieveEmployees();
  }

  retrieveEmployees(){
    this.pmService.getAll()
      .subscribe(
        data => {
          this.employees = data;
          console.log(data);
        },
        error => {
          console.log(error)
        }
      )
  }
}
