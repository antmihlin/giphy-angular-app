import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { GiphyService } from 'src/app/services/api/giphy.service';

import { HomeComponent } from './home.component';
import { giphySearchResponse } from './home.mocks';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockGiphyService: any = null;

  beforeEach(async () => {
    mockGiphyService = jasmine.createSpyObj('GiphyService', ['search']);
    mockGiphyService.search.and.returnValue(of(giphySearchResponse));

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: GiphyService, useValue: mockGiphyService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should show "Load more" button', fakeAsync(() => {
    const keywords = new Set(['cat']);
    component.onSearch(keywords);
    tick(100);

    fixture.detectChanges();

    const loadMoreBtn =
      fixture.debugElement.nativeElement.querySelector('#load-more-images');

    expect(loadMoreBtn).not.toBe(null);
  }));

  it('should load more images and add to an exisitng array', fakeAsync(() => {
    const keywords = new Set(['cat']);
    component.onSearch(keywords);
    tick(100);

    component.loadMore();
    tick(100);

    fixture.detectChanges();

    expect(component.images).toEqual([
      ...giphySearchResponse.data,
      ...giphySearchResponse.data,
    ]);
    expect(component.offset).toEqual(18);
  }));

  it('should retrieve images and update params: images, totalCount, offset ', fakeAsync(() => {
    const keywords = new Set(['cat']);
    component.onSearch(keywords);
    tick(100);

    fixture.detectChanges();

    expect(component.images).toBe(giphySearchResponse.data);
    expect(component.totalCount).toEqual(
      giphySearchResponse.pagination.total_count
    );
    expect(component.offset).toEqual(9);
  }));
});
