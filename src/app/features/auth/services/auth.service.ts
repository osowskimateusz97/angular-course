import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private sessionStorageService: SessionStorageService) {}

  login() {
    this.isAuthorized$$.next(true);
    //  this.sessionStorageService.setToken(token);
  }

  logout() {
    this.isAuthorized$$.next(false);
    this.sessionStorageService.deleteToken();
  }

  register(formData: string) {
    this.isAuthorized$$.next(true);
    //  this.sessionStorageService.setToken(token);
  }
  isLoggedIn(): boolean {
    return false;
  }
}
