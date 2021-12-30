import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-images-search',
  templateUrl: './images-search.component.html',
  styleUrls: ['./images-search.component.scss'],
})
export class ImagesSearchComponent {
  @Output() search = new EventEmitter<Set<string>>();
  constructor() {}

  keywords = new Set(['example tag']);
  formControl = new FormControl(['example tag']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  public searchKeywords(keywords: Set<string>) {
    this.search.emit(keywords);
  }
}
