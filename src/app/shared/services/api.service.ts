import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookiesStatic } from 'js-cookie';
import { map, Observable } from 'rxjs';
import { COOKIES } from '../tokens/cookies.token';
import { LOCAL_STORAGE } from '../tokens/localStorage.token';
import { ICategory } from '../types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'https://localhost:7013/api';
  private readonly headers: HttpHeaders;

  constructor(
    @Inject(COOKIES) private readonly cookies: CookiesStatic,
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
    private readonly http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.cookies.get('JwtAuthCookie')}`,
    });
  }

  getGuildCategories(guildId: string): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(
      `${this.apiUrl}/Category/GetGuildCategories`,
      {
        headers: this.headers,
        withCredentials: true,
        params: { guildId },
      }
    );
  }

  /**
   * Authorize the user logging in.
   * @param code Discord's code to verify to get the access token.
   * @returns JWT Token or 400 if they're already logged in.
   */
  authorizeUser(code: string): Observable<void> {
    return this.http
      .post(
        `${this.apiUrl}/Auth/Auth`,
        {},
        {
          withCredentials: true,
          params: { code },
          responseType: 'text',
        }
      )
      .pipe(
        map((token: any) => {
          this.localStorage.setItem('jwtToken', token);
        })
      );
  }
}
