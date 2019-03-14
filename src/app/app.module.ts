import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';
import { VerticalRotatorComponent, HorizontalRotatorComponent } from './rotator';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderContainerComponent } from './rotator/slider-container.component';
import { OverviewComponent } from './overview/overview.component';
import { ShortDescriptionMarkerDirective } from './slide/short-description-marker.directive';

@NgModule({
  declarations: [
    AppComponent,
    SliderContainerComponent,
    SliderComponent,
    SlideComponent,
    HorizontalRotatorComponent,
    VerticalRotatorComponent,
    NavigationComponent,
    OverviewComponent,
    ShortDescriptionMarkerDirective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
