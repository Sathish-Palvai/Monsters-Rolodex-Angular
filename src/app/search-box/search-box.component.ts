import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {

  @Output() textChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleChange(event: any) {
    this.textChanged.emit(event.target.value);
  }

}
