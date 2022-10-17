import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user_services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import ValidateForm from 'src/app/helpers/validateform';
import { Router } from '@angular/router';
import { LoginClient } from 'src/app/models/user-models/login-client-model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],


})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup; 
  helper = new JwtHelperService;
  decodedToken: any;
  
  constructor(private readonly fb: FormBuilder,
     private readonly auth: AuthService,
      private readonly router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //sent to database
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res) => {
          // map((response: any) => {
          //   const user = response;
          //   if(user.result.succeeded){
          //     localStorage.setItem('token',user.token);
          //     this.decodedToken = this.helper.decodeToken(user.token);
          //     console.log("hello");
          //     console.log(this.decodedToken);

          //   }
          // })
          //alert(res.message);
          //console.log(res.message);
          localStorage.setItem('token',res.message);
          this.decodedToken = this.helper.decodeToken(res.message);
          console.log(this.decodedToken);
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        },
        error:(err) => {
          alert(err?.error.message)
        }
      })
    }
    else{
      console.log("Form is not valid")
      //error
      ValidateForm.validateAllFormFileds(this.loginForm);
      alert('Your form is invalid');
    }
  }
  hideShowPassword(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password";
  }
}
