import { Component } from '@angular/core';
import { themes } from 'src/app/config/layout';
import { Theme } from 'src/app/models/theme';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-themes-menu',
  templateUrl: './themes-menu.component.html',
  styleUrls: ['./themes-menu.component.scss'],
})
export class ThemesMenuComponent {
  themes: Theme[] = themes;

  constructor(private themesService: ThemesService) {}

  setTheme(theme: string) {
    this.themesService.setTheme(theme);
  }
}
