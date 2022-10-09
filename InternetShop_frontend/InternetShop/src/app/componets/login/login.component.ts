import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user_services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import ValidateForm from 'src/app/helpers/validateform';
import { Router } from '@angular/router';
import { LoginClient } from 'src/app/models/user-models/login-client-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],


})
export class LoginComponent implements OnInit {

  type: string = 'password';
  isText: boolean = false;
  loginForm!: FormGroup; 
  constructor(private readonly fb: FormBuilder, private readonly auth: AuthService, private readonly router: Router) {}

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
          //alert(res.message);
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
}
