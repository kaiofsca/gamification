import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatIconModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ra?: string;
  senha?: string;
  raError: boolean = false;
  senhaError: boolean = false;
  showPassword = false;

  constructor(private authService: AuthService, private router: Router) {}

  
  submitForm() {
    // if (this.ra && this.senha) {
    //   this.authService.login(this.ra, this.senha).subscribe(
    //     (response) => {
    //       console.log('Login bem-sucedido', response);
    //       this.router.navigate(['/']);
    //     },
    //     (error) => {
    //       console.error('Erro no login', error);
    //     }
    //   );
    // } else {
    //   console.error('Por favor, insira a porra do seu RA e a senha krlh.');
    // }
    if (!this.ra) {
      this.raError = true;
    } else {
      this.raError = false; 
    }

    if (!this.senha) {
      this.senhaError = true; 
    } else {
      this.senhaError = false; 
    }
    if (this.ra && this.senha) {
      this.router.navigate(['dashboard']);
    }
  }

  passwordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
