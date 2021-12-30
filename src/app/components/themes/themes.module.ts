import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesMenuComponent } from './themes-menu/themes-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ThemesMenuComponent],
  exports: [ThemesMenuComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule],
})
export class ThemesModule {}
