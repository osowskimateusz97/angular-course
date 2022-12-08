import { Component, OnInit } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fields = {
    email: '',
    password: '',
  };

  constructor(private authorsStore: AuthorsStoreService) {}
  ngOnInit(): void {
    this.authorsStore.getAll();
  }
}
