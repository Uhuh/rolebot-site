import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../tokens/localStorage.token';
import { JwtService } from './jwtHandler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    @Inject(LOCAL_STORAGE) private readonly localStorage: Storage,
    private readonly jwtService: JwtService
  ) {}

  signOut() {
    this.localStorage.removeItem('jwtToken');
    this.jwtService.updateJwtToken();
  }
}
