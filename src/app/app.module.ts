import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slide/slide.component';
import { HorizontalRotatorComponent } from './rotator/horizontal-rotator.component';
import { VerticalRotatorComponent } from './rotator/vertical-rotator.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SlideComponent,
    HorizontalRotatorComponent,
    VerticalRotatorComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
