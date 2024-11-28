import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'; // Atualize o caminho para o seu serviço
import { User } from '../../models/User/user.model'; // Atualize o caminho para o seu modelo

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent {

  registerForm: FormGroup;
  invalidUser: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  register() {
    if (this.registerForm.valid) {
      const user: User = {
        email: this.registerForm.value['email'],
        password: this.registerForm.value['password'],
        id: 0,
        name: this.registerForm.value['name']
      };

      this.userService.register(user).subscribe(
        (        response: any) => {
          console.log('register successful', response);
          // Redirecione para a página principal ou dashboard
          this.router.navigate(['/']);
        },
        (        error: any) => {
          console.error('register failed', error);
          this.invalidUser = true;
        }
      );
    }
  }
}
