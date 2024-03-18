import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/resources/models/User';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = { username: '', password: '' };
  password: string = '';
  username: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    location.reload();
  }

  handleClick(arg: string) {
    this.user.password = this.password;
    this.user.username = this.username;

    this.loginService.doLogin(this.user).subscribe({
      next: (data) => {
        this.router.navigate(['/table']);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
