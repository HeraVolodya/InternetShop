import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map, Observable } from 'rxjs';
import { RegisterClient } from '../../models/user-models/register-client-model';
import { LoginClient } from '../../models/user-models/login-client-model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7122/";

  constructor(private http: HttpClient) { }

  register(userObj:RegisterClient):Observable<RegisterClient[]>{
    return this.http.post<RegisterClient[]>(`${this.baseUrl}api/Auth/register?`,userObj);
  }

  // login(loginObj: LoginClient):Observable<LoginClient[]>{
  //   return this.http.post<LoginClient[]>(`${this.baseUrl}api/Auth/login`,loginObj,
  //   )
  // }
  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}api/Auth/login?`,loginObj);
  }
}
