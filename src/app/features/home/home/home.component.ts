import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = [
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
    { title: 'Test', url: 'fvdfvdf' },
  ];

  public onSearch(ev: Set<string>) {}
}
