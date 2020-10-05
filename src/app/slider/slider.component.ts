import { Component, OnInit, Input, OnDestroy, ContentChildren, QueryList } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';
import { SlideDirective, SlideProvider, SLIDE_PROVIDER_TOKEN } from '../slideDefintionInjectionToken';

@Component({
  selector: 'app-slider',
  template: `<ng-content></ng-content>`,
})
export class SliderComponent {
  @ContentChildren(SlideDirective, {descendants: true, read: SLIDE_PROVIDER_TOKEN})
  public slideChildren: QueryList<SlideProvider>;

  public get slides(): SlideDefinition[]{
    return this.slideChildren.map(s => s.slide);
  }

  public currentSlide: Subject<SlideDefinition> = new Subject();
}

export interface SlideDefinition {
  backgroundImage: string;
  caption: string;
  description: string;
}
