import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-horizontal-rotator',
  template: `
    <div class="slider-container" [ngStyle]="{ 'width.px': width, 'height.px': height }">
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
  constructor(private slider: SliderComponent){}

  @Input() width: number;
  @Input() height: number;
  @Input() speed: number;

  public offsetY: number = 0;
  public offsetX: number = 0;
  private subscriptions: Subscription[] = [];

  public get screenWidth(): number {
    return this.slider.slides.length * this.width;
  }

  public get screenHeight(): number {
    return this.height;
  }

  public get flexDirection(): string {
    return 'row';
  }

  ngOnInit(): void {
    this.subscriptions.push(interval(this.speed).subscribe(val => {
      const currentSlideIndex = val % this.slider.slides.length;
      this.slider.currentSlideIndex.next(currentSlideIndex);
    }));

    this.subscriptions.push(this.slider.currentSlideIndex.subscribe(currentSlideIndex => {
      this.switchSlide(currentSlideIndex);
    }));
  }


  private switchSlide(currentSlideIndex: number) {
    this.offsetX = currentSlideIndex * this.width * -1;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }}
