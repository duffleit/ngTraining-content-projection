import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Component({
  selector: 'app-slider',
  template: `
    <div class="dot-container" *ngIf="navigationPosition === 'top'">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
    <div class="slider-container" [ngStyle]="{ 'width.px': width, 'height.px': height }">
      <ng-content></ng-content>
    </div>
    <div class="dot-container" *ngIf="navigationPosition === 'bottom'">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  currentSlide: Subject<SlideDefinition> = new Subject();
  slides: SlideDefinition[] = [];

  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  navigationPosition: 'top' | 'bottom' = 'bottom';

  goToSlide(slide: SlideDefinition) {
    this.currentSlide.next(slide);
  }

  public registerSlide(slide: SlideDefinition): void {
    this.slides.push(slide);
  }
}

export interface SlideDefinition {
  backgroundImage: string;
  caption: string;
  description: string;
}
