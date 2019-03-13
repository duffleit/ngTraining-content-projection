import { Component, Input, ContentChildren, QueryList } from '@angular/core';
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
  @ContentChildren(SlideComponent, {descendants: true})
  slideComponents: QueryList<SlideComponent>;

  get slides(): SlideDefinition[] {
    console.log(this.slideComponents.toArray().map(sc => sc.slide));
    return this.slideComponents.toArray().map(sc => sc.slide);
  }

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
