import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-slider',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  currentSlide: Subject<SlideDefinition> = new Subject();
  slides: SlideDefinition[] = [];

  public registerSlide(slide: SlideDefinition): void {
    if (!this.slides.includes(slide)) {
      this.slides.push(slide);
    }
  }
}

export interface SlideDefinition {
  backgroundImage: string;
  caption: string;
  description: string;
}
