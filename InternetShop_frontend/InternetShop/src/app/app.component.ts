import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './componets/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InternetShop';

  constructor(
    private dialogRef: MatDialog) {}
 
 openDialogLogin(){
   this.dialogRef.open(LoginComponent);
 }
}


