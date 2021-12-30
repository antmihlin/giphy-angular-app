import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private themeSource = new Subject<string>();

  public theme$ = this.themeSource.asObservable();

  constructor() {}

  public setTheme(theme: string) {
    this.themeSource.next(theme);
  }
}
