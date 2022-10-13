import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddAdvertisementsModel } from 'src/app/models/advertisements/add-advertisements';

import { AdvertisementService } from 'src/app/services/advertisement_services/advertisement.service';

@Component({
  selector: 'app-add-advertising',
  templateUrl: './add-advertising.component.html',
  styleUrls: ['./add-advertising.component.scss']
})
export class AddAdvertisingComponent implements OnInit {

  addAdvertisementRequest: AddAdvertisementsModel = {
    id: '',
    dataTime:'',
    text: '',
    imageURL: ''
  };

  constructor(private advertisementService: AdvertisementService, private router: Router) { }

  ngOnInit(): void {
  }
  addAdvertisement(){
    this.advertisementService.addAdvertisement(this.addAdvertisementRequest)
    .subscribe({
      next: (product) => {
        this.router.navigate(['advertising']);
        console.log(product)
      }
    });
  }

}
