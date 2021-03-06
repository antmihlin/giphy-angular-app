import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesSearchComponent } from './images-search/images-search.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ImagesSearchComponent],
  exports: [ImagesSearchComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class ImagesSearchModule {}
