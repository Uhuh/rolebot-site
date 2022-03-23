import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE } from '../tokens/localStorage.token';

@Injectable({
  providedIn: 'root',
})
export class AuthInceptor implements HttpInterceptor {
  constructor(@Inject(LOCAL_STORAGE) private readonly localStorage: Storage) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorage.getItem('jwtToken');

    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(req);
  }
}
