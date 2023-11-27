import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ra?: string;
  senha?: string;

  constructor(private authService: AuthService, private router: Router) {}

  
  submitForm() {
    if (this.ra && this.senha) {
      this.authService.login(this.ra, this.senha).subscribe(
        (response) => {
          console.log('Login bem-sucedido', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Erro no login', error);
        }
      );
    } else {
      console.error('Por favor, insira a porra do seu RA e a senha krlh.');
    }
  }
}
