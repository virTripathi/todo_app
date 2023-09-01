import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchKeywordEvt:EventEmitter<string>=new EventEmitter<string>();
  @Input() placeholder:string;

  getKeyword(event){
    this.searchKeywordEvt.emit(event.target.value);
  }
}
