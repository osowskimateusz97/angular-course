import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserStoreService, private router: Router) {}
  canActivate(): boolean {
    if (this.userService.isAdmin$) {
      return true;
    } else {
      this.router.createUrlTree(['/courses']);
      return false;
    }
  }
}
