import { Component, OnInit } from '@angular/core';
import { interval, map, startWith, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  ngOnInit(): void {
    console.log('use f');
    this.useInervalSwitchMap();
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
}
