import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() isEditable!: boolean;
  @Output() handleSearchValue = new EventEmitter<string>();
  searchValue = '';
  constructor() {}

  handleSearchClick() {
    this.handleSearchValue.emit(this.searchValue);
  }

  ngOnInit(): void {}
}
