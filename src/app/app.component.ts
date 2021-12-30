import { ThemesService } from './services/themes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'giphy-angular-app';
  selectedTheme: string = 'dark-theme';

  subscriptions: Subscription[] = [];

  constructor(private themesService: ThemesService) {}

  ngOnInit() {
    this.themesService.theme$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
