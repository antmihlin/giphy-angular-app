import { ThemesModule } from './../../components/themes/themes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultContainerComponent } from './default-container/default-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultContainerComponent],
  exports: [DefaultContainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    ThemesModule,
  ],
})
export class DefaultContainerModule {}
