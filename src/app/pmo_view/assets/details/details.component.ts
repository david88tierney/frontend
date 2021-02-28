import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from 'src/app/_services/asset.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  content: any;
  currentAsset = null;
  message = '';

  constructor(
    private userService: UserService,
    private assetService: AssetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe(
        data => {
          this.message = '';
          this.getAsset(this.route.snapshot.paramMap.get('id'));
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
      )
  }
  getAsset(id) {
    this.assetService.get(id)
      .subscribe (
        data => {
          this.currentAsset = data;
          console.log(data);
        },
        error => {
          console.log(error)
        }
      )
  };

  updateAsset() {
    this.assetService.update(this.currentAsset.id, this.currentAsset)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Asset was updated successfully!';
        },
        error => {
          console.log(error)
        }
      )
  }

  deleteAsset() {
    this.assetService.delete(this.currentAsset.id)
      .subscribe(
        response =>{
          console.log(response);
          this.router.navigate(['/assets']);
        },
        error => {
          console.log(error)
        }
      )
  }

}
