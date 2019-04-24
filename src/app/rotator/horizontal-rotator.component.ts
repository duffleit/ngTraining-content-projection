import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SliderComponent, SlideDefinition } from '../slider/slider.component';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-horizontal-rotator',
  template: `
    <div
      class="slider-container"
      [ngStyle]="{ 'width.px': width, 'height.px': height }"
    >
      <div
        class="screen"
        [ngStyle]="{
          'margin-top.px': offsetY,
          'margin-left.px': offsetX,
          'width.px': screenWidth,
          'height.px': screenHeight,
          'flex-direction': flexDirection
        }"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./rotator.component.scss']
})
export class HorizontalRotatorComponent implements OnInit, OnDestroy {
  @Input() width: number;
  @Input() height: number;
  @Input() speed: number;

  constructor(private slider: SliderComponent) {}

  public offsetY = 0;
  public offsetX = 0;
  private subscriptions: Subscription[];

  private get slides(): SlideDefinition[] {
    return this.slider.slides;
  }

  public get screenWidth(): number {
    return this.slides.length * this.width;
  }

  public get screenHeight(): number {
    return this.height;
  }

  public get flexDirection(): string {
    return 'row';
  }

  ngOnInit(): void {
    this.subscriptions = [
      timer(this.speed).subscribe(val => {
        const currentSlide = val % this.slides.length;
        this.slider.currentSlide.next(this.slides[currentSlide]);
      }),

      this.slider.currentSlide.subscribe(currentSlide => {
        const currentSlideIndex = this.slides.indexOf(currentSlide);
        this.offsetY = currentSlideIndex * this.height * -1;
      })
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
