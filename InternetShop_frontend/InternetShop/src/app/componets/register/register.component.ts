import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private readonly fb : FormBuilder, private readonly auth: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    })
  }
  onRegister(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      //add database
      this.auth.register(this.registerForm.value)
      .subscribe({
        next:(res => {
          //alert(res.message);
          this.registerForm.reset();
          this.router.navigate(['login']); //повертає на необхідну сторінку
        })
        ,error:(err => {
          alert(err?.error.message)
        })
      })
    }
    else{
      ValidateForm.validateAllFormFileds(this.registerForm);
      alert('Your form is invalid');
    }
  }
}
