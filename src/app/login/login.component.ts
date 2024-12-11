import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface FormType {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormType = {
    email: '',
    senha: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  handleSubmit() {
    const user = { email: this.form.email, password: this.form.senha };
    this.authService.login(user).subscribe(
      response => {
        console.log('Login efetuado com sucesso', response);
        localStorage.setItem('token', response.token); // Armazene o token no localStorage
        alert('Login efetuado com sucesso!');
        this.router.navigate(['/telainicial']); // Navegue para a página inicial após o login
      },
      error => {
        console.error('Falha no login', error);
        alert('Falha no login: ' + error.error.message);
      }
    );
  }
}
