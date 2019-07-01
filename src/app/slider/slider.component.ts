import { Component, OnInit, Input, OnDestroy, QueryList, ContentChildren, AfterViewInit } from '@angular/core';
import { interval, Subject, BehaviorSubject } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';
import { SlideDefinition } from '../slideDefintion';

@Component({
  selector: 'app-slider',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./slider.component.scss'],
  providers: []
})
export class SliderComponent {
  @ContentChildren(SlideComponent, {descendants: true})
  private slideComponents: QueryList<SlideComponent>;

  currentSlideIndex: BehaviorSubject<number> = new BehaviorSubject(0);

  public get slides(): SlideDefinition[]{
    return this.slideComponents.map(s => s.slide);
  };
}

