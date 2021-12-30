import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images-list-item',
  templateUrl: './images-list-item.component.html',
  styleUrls: ['./images-list-item.component.scss'],
})
export class ImagesListItemComponent {
  @Input() image: any;
  constructor() {}
}
