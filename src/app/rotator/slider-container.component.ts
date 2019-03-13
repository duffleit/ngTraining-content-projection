import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-slider-container',
  template: `
    <div class="slider-container" [ngStyle]="{ 'width.px': width, 'height.px': height }">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .slider-container {
        overflow: hidden;
      }
    `
  ]
})
export class SliderContainerComponent {
  constructor(private slider: SliderComponent) {}

  @Input()
  width: number;
  @Input()
  height: number;
}
