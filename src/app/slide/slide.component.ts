import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlideProvider, SLIDE_PROVIDER_TOKEN } from '../slideDefintionInjectionToken';
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
  providers: [
    {
      provide: SLIDE_PROVIDER_TOKEN,
      useExisting: SlideComponent,
    },
  ],
})
export class SlideComponent implements SlideProvider {
  @Input()
  public slide: SlideDefinition;
}
