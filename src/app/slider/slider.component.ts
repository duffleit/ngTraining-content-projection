import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  template: `
    <div class="dot-container" *ngIf="navigationPosition === 'top'">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
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
    <div class="dot-container" *ngIf="navigationPosition === 'bottom'">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() slides: SlideDefinition[] = [];
  @Input() width: number;
  @Input() height: number;
  @Input() speed: number;
  @Input() sliderDirection: 'vertical' | 'horizontal' = 'horizontal';
  @Input() navigationPosition: 'top' | 'bottom' = 'bottom';

  public offsetY: number = 0;
  public offsetX: number = 0;
  private intervalSubscriber: any;

  public get screenWidth(): number {
    return this.sliderDirection === 'horizontal' ? this.slides.length * this.width : this.width;
  }

  public get screenHeight(): number {
    return this.sliderDirection === 'horizontal' ? this.height : this.slides.length * this.height;
  }

  public get flexDirection(): string {
    return this.sliderDirection === 'horizontal' ? 'row' : 'column';
  }

  ngOnInit(): void {
    this.intervalSubscriber = interval(this.speed).subscribe(val => {
      const currentSlide = val % this.slides.length;
      if (this.sliderDirection === 'vertical') {
        this.offsetY = currentSlide * this.height * -1;
      } else {
        this.offsetX = currentSlide * this.width * -1;
      }
    });
  }

  goToSlide(slide: SlideDefinition) {
    const slideToGoTo = this.slides.indexOf(slide);
    if (this.sliderDirection === 'vertical') {
      this.offsetY = slideToGoTo * this.height * -1;
    } else {
      this.offsetX = slideToGoTo * this.width * -1;
    }
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}

export interface SlideDefinition {
  backgroundImage: string;
  caption: string;
  description: string;
}
