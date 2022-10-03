import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { RegisterClient } from '../models/register-client';
import { LoginClient } from '../models/login-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = "https://localhost:7122/api/Auth/"
  constructor(private http: HttpClient) { }

  register(userObj:RegisterClient):Observable<string>{
    return this.http.post<string>(`${this.baseUrl}register?`,userObj)
  }

  login(loginObj: LoginClient):Observable<string>{
    return this.http.post<any>(`${this.baseUrl}login`,loginObj)
  }
}
