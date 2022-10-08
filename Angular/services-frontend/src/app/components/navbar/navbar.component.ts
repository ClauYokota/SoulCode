import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormDeleteComponent } from 'src/app/funcionarios/components/form-delete/form-delete.component';
import { LogoutComponent } from '../form-logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  logOut():void{
    const dialog = this.dialog.open(LogoutComponent)
    dialog.afterClosed().subscribe(
      (boolean)=>{
        if (boolean){
        this.authService.signOut()
        }
      }
    )
  }

}
