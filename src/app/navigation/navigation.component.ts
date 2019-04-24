import { Component, OnInit, ContentChild, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';
import { NavigationLabelDirective } from '../navigation-label.directive';

@Component({
  selector: 'app-navigation',
  template: `
    <div *ngFor="let slide of slides" (click)="goToSlide(slide)">
      <ng-container #containerRef *ngTemplateOutlet="template;context:slide"></ng-container>
    </div>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @ContentChild(NavigationLabelDirective, { read: TemplateRef })
  public template: TemplateRef<any>;

  constructor(private slider: SliderComponent) {}

  public get slides(): SlideDefinition[] {
    return this.slider.slides;
  }

  goToSlide(slide: SlideDefinition) {
    this.slider.currentSlide.next(slide);
  }
}
