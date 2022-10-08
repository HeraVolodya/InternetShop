import { Component, OnInit } from '@angular/core';
import { AdvertisementModel } from 'src/app/models/advertisement-models/advertisement-model';
import { AdvertisementService } from 'src/app/services/advertisement_services/advertisement.service';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {

  advertisements: AdvertisementModel[] = [];
  constructor(private advertisementService: AdvertisementService) { 

  }

  ngOnInit(): void {
    this.advertisementService.getAllAdvertisement()
    .subscribe({
      next: (advertisements) => {
        this.advertisements = advertisements;
        console.log(advertisements);
      },
      error: (ressponse) => {
        console.log(ressponse)
      }
    });
  }

}
