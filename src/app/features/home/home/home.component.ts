import { GiphyQuery } from './../../../models/giphyQuery';
import { GiphyService } from './../../../services/api/giphy.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  public offset = 0;
  public limit = 9;
  public loading = false;
  public images: any;

  private subscriptions: Subscription[] = [];

  constructor(private giphyService: GiphyService) {}

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public onSearch(ev: Set<string>) {
    this.loading = true;
    const query: GiphyQuery = {
      q: [...ev].join(','),
      offset: this.offset,
      limit: this.limit,
    };
    this.subscriptions.push(
      this.giphyService.search(query).subscribe(
        (res: any) => {
          if (res?.data) {
            this.images = res.data;
          }
        },
        (err) => {},
        () => {
          this.loading = false;
        }
      )
    );
  }

  public getMore() {
    this.loading = true;
  }
}
