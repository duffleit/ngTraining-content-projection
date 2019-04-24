import { Component, Input, ContentChildren, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';
import { SlideDirective } from '../slide.directive';
import { SLIDE_DEFINTION_TOKEN } from '../slide-definition.token';

@Component({
  selector: 'app-slider',
  template: `
    <ng-content></ng-content>
  `
})
export class SliderComponent {
  @ContentChildren(SlideDirective, { descendants: true, read: SLIDE_DEFINTION_TOKEN })
  public childSlides: QueryList<SlideDefinition>;

  public currentSlide = new BehaviorSubject<SlideDefinition>(null);

  public get slides(): SlideDefinition[] {
    return this.childSlides ? this.childSlides.toArray() : [];
  }
}

export interface SlideDefinition {
  backgroundImage: string;
  caption: string;
  description: string;
}
