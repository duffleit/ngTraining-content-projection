import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-slide',
  template: `
    <div
      class="slide"
      [ngStyle]="{
        'background-image': 'url(' + slide.backgroundImage + ')'
      }"
    >
      <div class="caption">
        <div class="title">{{ slide.caption }}</div>
        <div class="description">{{ slide.description }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input()
  public slide: SlideDefinition;

  constructor(private sliderComponent: SliderComponent) {}

  ngOnInit(): void {
    this.sliderComponent.registerSlide(this.slide);
  }
}
