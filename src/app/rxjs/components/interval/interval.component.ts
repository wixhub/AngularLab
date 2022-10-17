import { Component, OnInit } from '@angular/core';
import {
  concatMap,
  interval,
  map,
  mergeMap,
  startWith,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    console.log('use f');
    this.useIntervalMergeMap();
  }

  private useIntervalMap(): void {
    interval(1000).pipe(map(console.log), startWith('Angular'));
  }

  private useInervalSwitchMap(): void {
    interval(100)
      .pipe(
        take(2),
        switchMap(() => interval(1000).pipe(take(3)))
      )
      .subscribe((x) => console.log(x));
  }

  private useIntervalConcatMap(): void {
    interval(1000)
      .pipe(
        take(2),
        concatMap(() => interval(100).pipe(take(3)))
      )
      .subscribe((x) => console.log(x));
  }

  private useIntervalIn(): void {
    interval(1000)
      .pipe(
        take(2),
        map(() => interval(100).pipe(take(3)))
      )
      .subscribe((x) => x.subscribe(console.log));
  }

  private useIntervalMergeMap(): void {
    interval(1000)
      .pipe(
        take(2),
        mergeMap(() => interval(100).pipe(take(3)))
      )
      .subscribe((x) => console.log(x));
  }
}
