import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import chaves from '../configs/chaves';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(ra: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      ra: ra,
      senha: senha,
    };

    return this.http.post<any>(chaves.Login, body, { headers }).pipe(
      map((response) => {
        this.autorizarApp(response.token);
        return response;
      }),
      catchError((error: any) => {
        console.error('Erro no login', error);
        throw error;
      })
    )
  }

  autorizarApp(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    const body = {
      idoperacao: '1',
      clienteKey: chaves.PassaporteToken,
    };

    return this.http.post(chaves.PassaporteApi, body, { headers }).pipe(
      map((response: any) => {
        console.log('Parece q deu bom', response);
        localStorage.setItem('jwtToken', token);
        return response;
      }),
      catchError((error: any) => {
        console.error('Erro na requisição otario', error);
        throw error;
      })
    )
  }
}