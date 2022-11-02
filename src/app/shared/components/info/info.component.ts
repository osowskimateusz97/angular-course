import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() infoTitle = '';
  @Input() infoText?: string;

  constructor() {}

  ngOnInit(): void {}
}
