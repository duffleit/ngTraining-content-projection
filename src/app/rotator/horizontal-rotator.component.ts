import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SliderComponent, SlideDefinition } from '../slider/slider.component';
import { interval } from 'rxjs';

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
  private intervalSubscriber: any;

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
    this.intervalSubscriber = interval(this.speed).subscribe(val => {
      const currentSlide = val % this.slider.slides.length;
      this.offsetX = currentSlide * this.width * -1;
    });
  }


  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }}
