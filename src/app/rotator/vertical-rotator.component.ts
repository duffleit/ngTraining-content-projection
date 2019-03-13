import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { interval } from 'rxjs';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-vertical-rotator',
  template: `
    <div
      class="screen"
      [ngStyle]="{
        'margin-top.px': offset,
        'width.px': screenWidth,
        'flex-direction': flexDirection
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./rotator.component.scss']
})
export class VerticalRotatorComponent implements OnInit, OnDestroy {
  constructor(private slider: SliderComponent) {}

  @Input()
  speed: number;

  public offset: number;
  private intervalSubscriber: any;

  public get screenWidth(): number {
    return this.slider.width;
  }

  public get flexDirection(): string {
    return 'column';
  }

  ngOnInit(): void {
    this.intervalSubscriber = interval(this.speed).subscribe(val => {
      const currentSlide = val % this.slider.slides.length;
      this.slider.currentSlide.next(this.slider.slides[currentSlide]);
    });

    this.slider.currentSlide.subscribe(slide => {
      const indexOfCurrentSlide = this.slider.slides.indexOf(slide);
      this.offset = indexOfCurrentSlide * this.slider.height * -1;
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}
