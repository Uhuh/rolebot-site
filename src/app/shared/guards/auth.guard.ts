import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { concatMap, first, Observable, of } from 'rxjs';
import { JwtService } from '../services/jwtHandler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.can(route.params['guildId']);
  }

  private can(guildId: string): Observable<boolean | UrlTree> {
    /**
     * Ensure that the user has access to the guild.
     */
    return this.jwtService.guilds$.pipe(
      first(),
      concatMap((guilds) => {
        return of(!!guilds?.find((g) => g.id === guildId));
      })
    );
  }
}
