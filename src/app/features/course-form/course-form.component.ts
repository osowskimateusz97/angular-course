import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  formFields = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    authors: new FormArray([], [Validators.required]),
    newAuthor: new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
    duration: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  get title() {
    return this.formFields.get('title');
  }
  get description() {
    return this.formFields.get('description');
  }
  get authors() {
    return this.formFields.get('authors') as FormArray;
  }
  get newAuthor() {
    return this.formFields.get('newAuthor');
  }
  get duration() {
    return this.formFields.get('duration');
  }

  constructor() {}

  ngOnInit(): void {}
}
