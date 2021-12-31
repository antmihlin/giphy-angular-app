import { ImagesSearchModule } from './../../components/images-search/images-search.module';
import { DefaultContainerModule } from './../../containers/default-container/default-container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagesListModule } from 'src/app/components/images-list/images-list.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DefaultContainerModule,
    FlexLayoutModule,
    ImagesListModule,
    ImagesSearchModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
