import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  SlideProvider,
  SLIDE_PROVIDER_TOKEN,
} from '../slideDefintionInjectionToken';
import { SlideDefinition } from '../slider/slider.component';

@Component({
  selector: 'app-fontSlide',
  template: ` {{ slide.caption }} `,
  styleUrls: ['./fontSlide.component.scss'],
  providers: [
    {
      provide: SLIDE_PROVIDER_TOKEN,
      useExisting: FontSlideComponent,
    },
  ],
})
export class FontSlideComponent implements SlideProvider {
  @Input()
  public slide: SlideDefinition;
}
