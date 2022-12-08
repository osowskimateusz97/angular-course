import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { IAuthor } from '../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  private authors$$ = new BehaviorSubject<IAuthor[]>([]);
  private isLoading$$ = new BehaviorSubject(false);
  public user$ = this.authors$$.asObservable();
  public isLoading$ = this.isLoading$$.asObservable();

  constructor(private authorsService: AuthorsService) {}

  getAll() {
    this.isLoading$$.next(true);
    this.authorsService.getAll().subscribe((data) => {
      this.authors$$.next(data);
      this.isLoading$$.next(false);
    });
  }
  addAuthor(name: string) {
    this.authorsService.addAuthor(name);
  }
}
