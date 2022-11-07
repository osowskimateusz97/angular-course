import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../login/login.component.scss'],
})
export class RegistrationComponent implements OnInit {
  formFields = {
    email: '',
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  };

  constructor() {}
  ngOnInit(): void {}
}
