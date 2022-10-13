import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementModel } from 'src/app/models/advertisements/advertisement-model';
import { AdvertisementService } from 'src/app/services/advertisement_services/advertisement.service';

@Component({
  selector: 'app-edit-advertising',
  templateUrl: './edit-advertising.component.html',
  styleUrls: ['./edit-advertising.component.scss']
})
export class EditAdvertisingComponent implements OnInit {

  advertisementDetails: AdvertisementModel = {
    id: '',
    dataTime:'',
    text: '',
    imageURL: ''
  };

  constructor(private route: ActivatedRoute, 
    private advertisementService: AdvertisementService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          //call API
          this.advertisementService.getAdvertisement(id)
            .subscribe({
              next: (response) => {
                this.advertisementDetails = response;
              }
            })
        }
      }
    })
  }
  updateAdvertisement(){
    this.advertisementService.updateAdvertisement(this.advertisementDetails.id, this.advertisementDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['advertisement']);
      }
    })
  }

  deleteAdvertisement(id: string){
    this.advertisementService.deleteAdvertisement(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['advertisement']);
      }
    })
  }
}
