import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';
import { HorizontalRotatorComponent } from './rotator/horizontalRotator.component';
import { VerticalRotatorComponent } from './rotator/verticalRotator.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationLabelDirective, SlideDirective } from './slideDefintionInjectionToken';
import { FontSlideComponent } from './slide/fontSlide.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SlideComponent,
    HorizontalRotatorComponent,
    VerticalRotatorComponent,
    NavigationComponent,
    SlideDirective,
    FontSlideComponent,
    NavigationLabelDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
