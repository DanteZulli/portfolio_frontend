import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    isLogged = false;
    constructor(private tokenService: TokenService) { }

    ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    }

    onLogout(): void {
      this.tokenService.logOut();
      window.location.reload();
    }

}
