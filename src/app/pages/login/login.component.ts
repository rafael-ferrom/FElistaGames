import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; // Atualize o caminho para o seu serviço
import { User } from '../../models/User/user.model'; // Atualize o caminho para o seu modelo

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  invalidUser: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.valid) {
      const user: User = {
        email: this.loginForm.value['email'],
        password: this.loginForm.value['password'],
        id: 0,
        name: ''
      };

      this.userService.login(user).subscribe(
        (        response: any) => {
          console.log('Login successful', response);
          // Redirecione para a página principal ou dashboard
          this.router.navigate(['/app']);
        },
        (        error: any) => {
          console.error('Login failed', error);
          this.invalidUser = true;
        }
      );
    }
  }
}
