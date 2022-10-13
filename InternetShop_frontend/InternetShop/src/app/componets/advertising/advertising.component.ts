import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdvertisementModel } from 'src/app/models/advertisements/advertisement-model';

import { AdvertisementService } from 'src/app/services/advertisement_services/advertisement.service';
import { AddAdvertisingComponent } from './add-advertising/add-advertising/add-advertising.component';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {

  advertisements: AdvertisementModel[] = [];
  constructor(private advertisementService: AdvertisementService,
              private dialogRef: MatDialog) { 

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
  openDialogAddAdvertisement(){
    this.dialogRef.open(AddAdvertisingComponent);
  }


}
