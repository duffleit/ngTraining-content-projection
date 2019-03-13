import { Component, OnInit, Input } from '@angular/core';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-slide',
  template: `
    <div
      class="slide"
      [ngStyle]="{
        'width.px': width,
        'height.px': height,
        'background-image': 'url(' + slide.backgroundImage + ')'
      }"
    >
      <div class="caption">
        <div class="title">{{ slide.caption }}</div>
        <div class="description">{{ slide.description }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input()
  public slide: SlideDefinition;

  get width(): number {
    return this.slider.width;
  }

  get height(): number {
    return this.slider.height;
  }

  constructor(private slider: SliderComponent) {}

  public ngOnInit(): void {
    this.slider.registerSlide(this.slide);
  }
}
