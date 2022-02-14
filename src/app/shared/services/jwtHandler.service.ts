import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COOKIES } from '../tokens/cookies.token';
import { CookiesStatic } from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { IGuild } from '../types/interfaces';

interface IUser {
  readonly id: string;
  readonly username: string;
  readonly avatar: string;
  readonly discriminator: string;
  readonly banner: string;
  readonly public_flags: number;
  readonly flags: number;
}

interface IJwtUserInfo {
  readonly access_token: string;
  readonly user: string;
  readonly guilds: string;
  readonly iss: string;
  readonly id: string;
  readonly aud: string[];
  readonly sub: string;
}

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private readonly jwtExpireDate = new BehaviorSubject<Date | undefined>(
    undefined
  );
  private readonly jwtUserInfo = new BehaviorSubject<IJwtUserInfo | undefined>(
    undefined
  );
  private readonly user = new BehaviorSubject<IUser | undefined>(undefined);
  private readonly guilds = new BehaviorSubject<IGuild[] | undefined>(
    undefined
  );
  private readonly userId = new BehaviorSubject<string | undefined>(undefined);
  private readonly username = new BehaviorSubject<string | undefined>(
    undefined
  );
  private readonly avatar = new BehaviorSubject<string | undefined>(undefined);
  private readonly discriminator = new BehaviorSubject<string | undefined>(
    undefined
  );
  private readonly banner = new BehaviorSubject<string | undefined>(undefined);
  private readonly isFresh = new BehaviorSubject<boolean | undefined>(
    undefined
  );

  readonly expireDate$ = this.jwtExpireDate.asObservable();
  readonly user$ = this.user.asObservable();
  readonly guilds$ = this.guilds.asObservable();
  readonly userId$ = this.userId.asObservable();
  readonly username$ = this.username.asObservable();
  readonly avatar$ = this.avatar.asObservable();
  readonly discriminator$ = this.discriminator.asObservable();
  readonly banner$ = this.banner.asObservable();
  readonly isFresh$ = this.isFresh.asObservable();

  constructor(@Inject(COOKIES) private readonly cookies: CookiesStatic) {
    this.updateJwtToken();
  }

  updateJwtToken(): void {
    const token = this.getCookieJwtToken();

    if (!token) {
      this.invalidToken();
      return;
    }

    // Decode the token. jwt_decode will throw if it's invalid so the catch handles that.
    try {
      const decodedUserInfo: IJwtUserInfo | undefined = jwt_decode(token);

      const user: IUser | undefined = JSON.parse(decodedUserInfo?.user || '');
      const guilds: IGuild[] | undefined = JSON.parse(
        decodedUserInfo?.guilds || ''
      );

      this.user.next(user);
      this.guilds.next(guilds);
      this.jwtUserInfo.next(decodedUserInfo);
      this.username.next(user?.username);
      this.userId.next(user?.id);
      this.avatar.next(user?.avatar);
      this.discriminator.next(user?.discriminator);

      const now = new Date().getTime();

      // If the JWT expiration date is invalid then make the difference negative so the token is immediately invalidated.
      const diff =
        (this.jwtExpireDate.value?.getTime() ?? new Date(-1000).getTime()) -
        now;

      setTimeout(() => {
        this.isFresh.next(false);
      }, diff);
    } catch {
      this.invalidToken();
    }
  }

  private invalidToken() {
    this.jwtExpireDate.next(new Date(-1000));
    this.isFresh.next(false);
  }

  private getCookieJwtToken(key = 'JwtAuthCookie'): string | undefined {
    return this.cookies.get(key);
  }

  get isExpired(): boolean {
    const now = new Date();
    const expireDate = this.jwtExpireDate?.value;

    if (!expireDate) {
      return true;
    }

    return now > expireDate;
  }
}
