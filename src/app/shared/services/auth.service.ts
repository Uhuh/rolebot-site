import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'https://localhost:7013/api';

  constructor(private readonly http: HttpClient) {}

  authorizeUser(code: string) {
    return this.http.post(
      `${this.apiUrl}/SignIn/Auth`,
      {},
      { withCredentials: true, params: { code: code } }
    );
  }
}
