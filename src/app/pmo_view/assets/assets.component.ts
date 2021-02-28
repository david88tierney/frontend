import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../_services/asset.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  content: any;
  assets: any;
  currentAsset = null;
  currentIndex = -1;
  title = '';

  constructor(
    private userService: UserService,
    private assetService: AssetService) { }

  ngOnInit() {
    this.userService.getPMOBoard()
      .subscribe(
        data =>{
          this.retrieveAssets();
        },
        err =>{
          this.content =  JSON.parse(err.error).message;
        });
  }

  retrieveAssets() {
    this.assetService.getAll()
      .subscribe (
        data => {
          this.assets = data;
          console.log(data)
        },
        error =>{
          console.log(error)
        }
      )
  }

  refreshList() {
    this.retrieveAssets();
    this.currentAsset = null;
    this.currentIndex = -1;
  }

  setActiveAsset(asset, index) {
    this.currentAsset = asset;
    this.currentIndex = index;
  }

  searchAsset() {
    // Need to do maybe
  }
}

