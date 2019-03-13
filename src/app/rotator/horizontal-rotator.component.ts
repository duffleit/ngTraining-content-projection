import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { interval } from 'rxjs';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-horizontal-rotator',
  template: `
    <app-slider-container [width]="width" [height]="height">
      <div
        class="screen"
        [ngStyle]="{
          'margin-left.px': offset,
          'width.px': screenWidth,
          'height.px': height,
          'flex-direction': flexDirection
        }"
      >
        <ng-content></ng-content>
      </div>
    </app-slider-container>
  `,
  styleUrls: ['./rotator.component.scss']
})
export class HorizontalRotatorComponent implements OnInit, OnDestroy {
  constructor(private slider: SliderComponent) {}

  @Input()
  speed: number;
  @Input()
  width: number;
  @Input()
  height: number;

  public offset: number;
  private intervalSubscriber: any;

  public get screenWidth(): number {
    return this.slider.slides.length * this.width;
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
      this.offset = indexOfCurrentSlide * this.width * -1;
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}
