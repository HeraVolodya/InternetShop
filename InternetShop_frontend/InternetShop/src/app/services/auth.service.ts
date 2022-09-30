import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7122/api/Auth/"
  constructor(private http: HttpClient) { }

  //ПОМІНЯЙ any НА string !!!!!!!!!!!!!!!!!!1
  singUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }

  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}login`,loginObj)
  }
}
