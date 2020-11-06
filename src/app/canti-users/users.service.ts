import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  token: string | null = null;
  users: any[] = [];

  constructor(private http: HttpClient) {}

  login() {
    let credentials = {
      email: 'toto@gmail.com',
      password: 'bonjour',
    };
    return this.http.post(API + '/login', credentials, { observe: 'response' });
  }

  getAllUsers(token) {
    let options = {
      headers: { Authorization: token },
    };
    return this.http.get(API + '/user/findall', options);
  }
}
