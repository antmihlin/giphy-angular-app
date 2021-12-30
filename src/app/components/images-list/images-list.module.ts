import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImagesListItemComponent } from './images-list-item/images-list-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ImagesListComponent, ImagesListItemComponent],
  exports: [ImagesListComponent, ImagesListItemComponent],
  imports: [CommonModule, FlexLayoutModule, MatCardModule],
})
export class ImagesListModule {}
