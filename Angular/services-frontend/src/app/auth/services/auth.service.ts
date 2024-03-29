import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../models/usr';
import { JwtHelperService } from '@auth0/angular-jwt'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly baseUrl: string = 'http://localhost:8080'
  private jwt = new JwtHelperService

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signIn(user: User): Observable<{Authorization: string}>{
    return this.http.post<{Authorization: string}>(`${this.baseUrl}/login`, user)
    .pipe(
      tap((response)=>{
        this.armazenarToken(response.Authorization)
      })
    )
  }

  signOut(): void{
    this.removerToken()
    this.router.navigateByUrl('/auth/login')
  }

  armazenarToken(token:string): void {
    localStorage.setItem('authorization', token)
  }

  removerToken(): void{
    localStorage.removeItem('authorization')
  }

  recuperarToken(): string | null{
    return localStorage.getItem('authorization')
  }

  logado():boolean{
    //o usuário estará logado se o token estiver armazenado e o token ainda for válido
    const token = this.recuperarToken()
    if (token ==null){
      return false
    }

   return  !this.jwt.isTokenExpired(token) //testando a validade do token
    
  }

}
