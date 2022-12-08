import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private name$$ = new BehaviorSubject<string | null>(null);
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  public name$ = this.name$$.asObservable();
  public isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {}

  getUser() {
    const obs = this.userService.getUser();
    obs.subscribe(({ result }) => {
      const isAdmin = result.role === 'admin';
      this.name$$.next(result.name);
      this.isAdmin$$.next(isAdmin);
    });
  }
}
