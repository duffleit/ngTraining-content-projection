import { Directive, InjectionToken, OnInit } from '@angular/core';
import { SlideDefinition } from './slider/slider.component';

export const SLIDE_PROVIDER_TOKEN = new InjectionToken(
  'SLIDE_DEFINITION_TOKEN'
);

export class SlideProvider {
    slide: SlideDefinition;
}

@Directive({
  selector: '[appSlide]',
})
export class SlideDirective {}

@Directive({
    selector: '[appNavigationLabel]',
  })
  export class NavigationLabelDirective {}