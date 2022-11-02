import { Component, Input, OnInit } from '@angular/core';

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
    this.durationInHoursFormat = this.convertDurationToHours(
      this.course.duration
    );
    this.course.creationDate = this.formatCreationDate(
      this.course.creationDate
    );
  }

  convertDurationToHours(duration: number) {
    let formattedTime =
      `0${(duration / 60) ^ 0}`.slice(-2) +
      ':' +
      ('0' + (duration % 60)).slice(-2);
    let hourSuffix = 'hours';
    if (duration <= 120) {
      hourSuffix = 'hour';
    }
    formattedTime = `${formattedTime} ${hourSuffix}`;
    return formattedTime;
  }

  formatCreationDate(date: string) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('.');
  }
}
