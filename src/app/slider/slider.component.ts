import { Component, QueryList, ContentChildren, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';
import { SlideData, SlideDefinition } from '../view-models';

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

  public get slides(): SlideDefinition[]
  {
    return this.slideComponents.map(s => (
      {data: s.data, label: s.template}
    ));
  };

}

