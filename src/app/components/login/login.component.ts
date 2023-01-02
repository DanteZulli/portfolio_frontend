import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from '../../model/login-usuario';
import { TokenService } from '../../service/token.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;
  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
   }
   onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
        this.router.navigate(['']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLogged = false;
        this.isLoginFail = true;
        console.log("Error: " + this.errorMessage);
      }
    );
   }
}
