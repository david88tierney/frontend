import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/_services/contract.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  message = '';
  content: any;
  currentContract = null;

  constructor(
    private userService: UserService,
    private contractService: ContractService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe(
        data =>{
          this.message = '';
          this.getContract(this.route.snapshot.paramMap.get('id'));
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
        err => {
          console.log(err);
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

returnToTable(){
  this.router.navigate(['/contracts']);
}

}
