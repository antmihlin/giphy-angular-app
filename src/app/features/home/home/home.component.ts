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
  public keywords: string;
  public loading = false;
  public images: any;
  public totalCount: number = 0;

  private subscriptions: Subscription[] = [];

  constructor(private giphyService: GiphyService) {}

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public onSearch(ev: Set<string>) {
    this.loading = true;
    this.keywords = [...ev].join(',');

    const query: GiphyQuery = {
      q: this.keywords,
      offset: this.offset,
      limit: this.limit,
    };
    this.subscriptions.push(
      this.giphyService.search(query).subscribe(
        (res: any) => {
          if (res?.data) {
            this.images = res.data;
            this.totalCount = res?.pagination?.total_count;
            this.offset += this.limit;
          }
        },
        (err) => {},
        () => {
          this.loading = false;
        }
      )
    );
  }

  public loadMore() {
    this.loading = true;

    const query: GiphyQuery = {
      q: this.keywords,
      offset: this.offset,
      limit: this.limit,
    };
    this.subscriptions.push(
      this.giphyService.search(query).subscribe(
        (res: any) => {
          if (res?.data) {
            this.images = [...this.images, ...res.data];
            this.offset += this.limit;
          }
        },
        (err) => {},
        () => {
          this.loading = false;
        }
      )
    );
  }
}
