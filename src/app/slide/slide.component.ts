import { Component, Input } from '@angular/core';
import { SlideDefinition } from '../slider/slider.component';
import { SLIDE_DEFINTION_TOKEN } from '../slide-definition.token';

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
  providers: [{ provide: SLIDE_DEFINTION_TOKEN, useExisting: SlideComponent }]
})
export class SlideComponent implements SlideDefinition {
  public get backgroundImage(): string {
    return this.slide.backgroundImage;
  }

  public get caption(): string {
    return this.slide.caption;
  }

  public get description(): string {
    return this.slide.description;
  }

  @Input()
  public slide: SlideDefinition;
}
