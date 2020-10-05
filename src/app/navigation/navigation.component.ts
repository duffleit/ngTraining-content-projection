import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplateRef } from '@angular/core';
import { Component, ContentChild, OnInit } from '@angular/core';
import { NavigationLabelDirective } from '../slideDefintionInjectionToken';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="dot-container">
      <div
        *ngFor="let slide of slides"
        class="dot"
        (click)="goToSlide(slide)"
      >
        <ng-container *ngTemplateOutlet="labelTemplate;context:slide"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ContentChild(NavigationLabelDirective, {read: TemplateRef})
  public labelTemplate: TemplateRef<any>;

  constructor(private sliderComponent: SliderComponent) {}

  ngOnInit(): void {}

  goToSlide(slide: SlideDefinition): void {
    this.sliderComponent.currentSlide.next(slide)
  }

  public get slides(): SlideDefinition[] {
    return this.sliderComponent.slides;
  }

}
