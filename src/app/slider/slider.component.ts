import { Component, Input, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-slider',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  currentSlide: Subject<SlideDefinition> = new Subject();
  @ContentChildren(SlideComponent, { descendants: true })
  slideComponents: QueryList<SlideComponent>;

  get slides(): SlideDefinition[] {
    return this.slideComponents.toArray();
  }
}

export interface SlideDefinition {
  shortDescription: TemplateRef<any>;
}
