import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Verifique se o caminho está correto
import { Router } from '@angular/router';

interface FormType {
  nomeCompleto: string;
  email: string;
  senha: string;
  confirmarSenha: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  form: FormType = {
    nomeCompleto: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  handleChange(name: keyof FormType, value: string) {
    this.form[name] = value;
  }

  handleSubmit() {
    if (this.form.senha !== this.form.confirmarSenha) {
      alert('As senhas não correspondem!');
      return;
    }

    const user = {
      name: this.form.nomeCompleto,
      email: this.form.email,
      password: this.form.senha
    };

    this.authService.register(user).subscribe(
      response => {
        alert('Cadastro efetuado com sucesso!');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Falha no cadastro:', error);
        alert('Erro no cadastro: ' + (error.error.message || 'ocorreu um erro genérico'));
      }
    );
  }
}
