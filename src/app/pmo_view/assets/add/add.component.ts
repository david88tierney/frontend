import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/_services/asset.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  content: any;
  viewChart = false;
  submitted = false;

  asset = {
    title: '',
    asset_number: '',
    date_in_service: '',
    description: '',
    tax_cost: '',
    model_number: '',
    serial_number: '',
    location: '',
    notes: ''
  };

  constructor(
    private userService: UserService,
    private assetService: AssetService
  ) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe(
        data => {
          this.content = data;
          this.viewChart = true;
        },
        err =>{
          this.content = JSON.parse(err.error).message;
        }
      )
  }

  saveAsset() {
    const data = {
      title: this.asset.title,
      asset_number: this.asset.asset_number,
      date_in_service: this.asset.date_in_service,
      description: this.asset.description,
      tax_cost: this.asset.tax_cost,
      model_number: this.asset.model_number,
      serial_number: this.asset.serial_number,
      location: this.asset.location,
      notes: this.asset.notes
    }

    this.assetService.create(data)
      .subscribe(
        response => {
          console.log(response)
          this.submitted = true;
        },
        error => {
          console.log(error)
        });
  }

  newAsset(){
    this.submitted = false;
    this.asset = {
      title: '',
      asset_number: '',
      date_in_service: '',
      description: '',
      tax_cost: '',
      model_number: '',
      serial_number: '',
      location: '',
      notes: ''
    }
  }

}
