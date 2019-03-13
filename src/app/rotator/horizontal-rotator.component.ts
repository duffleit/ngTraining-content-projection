import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { interval } from 'rxjs';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-horizontal-rotator',
  template: `
    <div
      class="screen"
      [ngStyle]="{
        'margin-left.px': offset,
        'width.px': screenWidth,
        'flex-direction': flexDirection
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./rotator.component.scss']
})
export class HorizontalRotatorComponent implements OnInit, OnDestroy {
  constructor(private slider: SliderComponent) {}

  @Input()
  speed: number;

  public offset: number;
  private intervalSubscriber: any;

  public get screenWidth(): number {
    return this.slider.slides.length;
  }

  public get flexDirection(): string {
    return 'row';
  }

  ngOnInit(): void {
    this.intervalSubscriber = interval(this.speed).subscribe(val => {
      const currentSlide = val % this.slider.slides.length;
      this.slider.currentSlide.next(this.slider.slides[currentSlide]);
    });

    this.slider.currentSlide.subscribe(slide => {
      const indexOfCurrentSlide = this.slider.slides.indexOf(slide);
      this.offset = indexOfCurrentSlide * this.slider.width * -1;
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}
