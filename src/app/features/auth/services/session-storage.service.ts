import { Inject, Injectable } from '@angular/core';
import { WINDOW } from './window.service';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor(@Inject(WINDOW) private window: Window) {}

  setToken(token: string) {
    this.window.sessionStorage.setItem('__token__', token);
  }

  getToken() {
    return this.window.sessionStorage.getItem('__token__');
  }

  deleteToken() {
    this.window.sessionStorage.removeItem('__token__');
  }
}
