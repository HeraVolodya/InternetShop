import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvertisementModel } from 'src/app/models/advertisements/advertisement-model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAdvertisement(): Observable<AdvertisementModel[]>{
    return this.http.get<AdvertisementModel[]>('https://localhost:7122/api/AdvertisementControler/getAdvertisements')
  }

  addAdvertisement(addAdvertisementRequest: AdvertisementModel): Observable<AdvertisementModel>{
    return this.http.post<AdvertisementModel>(this.baseApiUrl + 'AdvertisementControler/addAdvertisements', addAdvertisementRequest)
  }

  getAdvertisement(id: string):Observable<AdvertisementModel>{
    return this.http.get<AdvertisementModel>(this.baseApiUrl + 'AdvertisementControler/' + id);  
  }

  updateAdvertisement(id: string, updateAdvertisement: AdvertisementModel):Observable<AdvertisementModel>{
    return this.http.put<AdvertisementModel>(this.baseApiUrl + 'AdvertisementControler/' + id, updateAdvertisement); 
  }

  deleteAdvertisement(id: string):Observable<AdvertisementModel>{
    return this.http.delete<AdvertisementModel>(this.baseApiUrl + 'AdvertisementControler/' + id); 
  }
}
