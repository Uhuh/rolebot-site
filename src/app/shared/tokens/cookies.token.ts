import { InjectionToken } from '@angular/core';
import { CookiesStatic } from 'js-cookie';

export const COOKIES = new InjectionToken<CookiesStatic>('cookies');
