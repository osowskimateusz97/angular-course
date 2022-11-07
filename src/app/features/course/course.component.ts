import { Component, Input, OnInit } from '@angular/core';
import { convertDurationToHours } from 'src/app/shared/utils/calculateDate';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() isEditable!: boolean;
  @Input() course!: {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
  };
  durationInHoursFormat!: string;

  constructor() {}

  ngOnInit(): void {
    this.durationInHoursFormat = convertDurationToHours(this.course.duration);
  }
}
