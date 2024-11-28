import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/auth'

  constructor(private http:HttpClient) { }

  login(user: User): Observable<User> {
    const url = `${this.apiUrl}/login`
    return this.http.post<User>(url, user)
  }

  register(user: User): Observable<User> {
    const url = `${this.apiUrl}/register`
    return this.http.post<User>(url, user)
  }
}

